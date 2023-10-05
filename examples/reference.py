import torch
import pyro
import pyro.distributions as dist
from pyro.infer import MCMC, NUTS
from scipy.stats import norm, lognorm, uniform

# Define the number of simulations
nsim = 100

# Initialize Pyro
pyro.set_rng_seed(42)

# Define the Pyro model for the forward model
def compute_LL(y, Rth, eta_star, If_A, Vf, sigma):
    mu = Rth * eta_star * If_A * Vf
    sig = sigma
    LL = torch.sum(dist.Normal(mu, sig).log_prob(y))
    return LL

# Initialize variables
sigma = 0.5
eta = 0.65
eta_star = 1 - eta
If_A = 0.68
Vf = 11.909
u1 = 0
u2 = 100
s1 = 0
s2 = 10
eps_Rth = 0.035
eps_theta = 0.15
wd_rproj = "your_project_directory_path"  # Replace with your project directory path

# Define the Pyro model for the forward model
def forward_model(Rth, eta_star, If_A, Vf, sigma):
    mu = Rth * eta_star * If_A * Vf
    return pyro.sample("obs", dist.Normal(mu, sigma), obs=ds)

# Run the simulations
for i in range(1, nsim + 1):
    si_num = str(i).zfill(3)
    ds = torch.load(f"{wd_rproj}/_prepared_data/_simstudy_data/s{si_num}_01_100.pt")
    n = len(ds)

    m_Rth_start = torch.rand(1) * 20 + 30
    sd_Rth_start = torch.rand(1) * 9.9 + 0.1
    location = torch.log(m_Rth_start**2 / torch.sqrt(sd_Rth_start**2 + m_Rth_start**2))
    shape = torch.sqrt(torch.log(1 + (sd_Rth_start**2 / m_Rth_start**2)))
    Rth0_start = torch.exp(dist.LogNormal(location, shape).sample([n]))
    Rth0 = Rth0_start

    muRth0 = m_Rth_start
    sigmaRth0 = sd_Rth_start
    theta0 = torch.tensor([muRth0, sigmaRth0])

    mcmc = {}
    defaultMCMC = {"M": 100000, "burnin": 20000, "thin": 1}
    mcmc.update(defaultMCMC)
    mcmc["M"] = int(mcmc["M"])
    mcmc["burnin"] = int(mcmc["burnin"])
    mcmc["thin"] = int(mcmc["thin"])
    mcmc["nmc"] = mcmc["M"] + mcmc["burnin"]
    mcmc["verbose"] = 1000

    Rth_accept = [0] * mcmc["nmc"]
    theta_accept = [0] * mcmc["nmc"]

    Rth_MH = torch.zeros(mcmc["nmc"], n)
    muRth_MH = torch.zeros(mcmc["nmc"])
    sigmaRth_MH = torch.zeros(mcmc["nmc"])

    for m in range(mcmc["nmc"]):
        if m == (mcmc["burnin"] + 1):
            starttimeM = torch.cuda.Event(enable_timing=True)
            starttimeM.record()

        Rth1 = Rth0 + torch.randn(n) * eps_Rth
        mlog0 = torch.log(theta0[0]**2 / torch.sqrt(theta0[1]**2 + theta0[0]**2))
        slog0 = torch.sqrt(torch.log(1 + (theta0[1]**2 / theta0[0]**2)))

        D1 = compute_LL(ds, Rth1, eta_star, If_A, Vf, sigma) + torch.sum(lognorm.logpdf(Rth1, slog0, scale=torch.exp(mlog0)))
        D0 = compute_LL(ds, Rth0, eta_star, If_A, Vf, sigma) + torch.sum(lognorm.logpdf(Rth0, slog0, scale=torch.exp(mlog0)))

        q1 = torch.sum(norm.logpdf(Rth1, Rth0, eps_Rth))
        q0 = torch.sum(norm.logpdf(Rth0, Rth1, eps_Rth))

        Rth_alph = D1 - D0 - (q1 - q0)

        u = torch.rand(1)
        if torch.log(u) <= min(Rth_alph, 0):
            Rth0 = Rth1
            Rth_accept[m] = 1

        theta1 = theta0 + torch.randn(2) * eps_theta

        mlog1 = torch.log(theta1[0]**2 / torch.sqrt(theta1[1]**2 + theta1[0]**2))
        slog1 = torch.sqrt(torch.log(1 + (theta1[1]**2 / theta1[0]**2)))

        D1 = torch.sum(lognorm.logpdf(Rth0, slog1, scale=torch.exp(mlog1))) + uniform.logpdf(theta1[0], u1, u2) + uniform.logpdf(theta1[1], s1, s2)
        D0 = torch.sum(lognorm.logpdf(Rth0, slog0, scale=torch.exp(mlog0))) + uniform.logpdf(theta0[0], u1, u2) + uniform.logpdf(theta0[1], s1, s2)

        q1 = torch.sum(norm.logpdf(theta1, theta0, eps_Rth))
        q0 = torch.sum(norm.logpdf(theta0, theta1, eps_Rth))

        theta_alph = D1 - D0 - (q1 - q0)

        u = torch.rand(1)
        if torch.log(u) <= min(theta_alph, 0):
            theta0 = theta1
            theta_accept[m] = 1

        Rth_MH[m, :] = Rth0
        muRth_MH[m] = theta0[0]
        sigmaRth_MH[m] = theta0[1]

    finish = torch.cuda.Event(enable_timing=True)
    finish.record()
    finish.synchronize()
    durT = finish.elapsed_time(starttime) / 1000.0
    durM = finish.elapsed_time(starttimeM) / 1000.0
    dur = {"total": durT, "durM": durM}

    acc_rate_Rth = round(torch.mean(torch.tensor(Rth_accept[mcmc["burnin"]:])) * 100, 2)
    acc_rate_theta = round(torch.mean(torch.tensor(theta_accept[mcmc["burnin"]:])) * 100, 2)

    print("\nMCMC info: \n", "acceptance Rth:  ", acc_rate_Rth, "\n", "acceptance theta:", acc_rate_theta, "\n\n")

    results_i = {
        "mcmc": mcmc,
        "start": {"m_Rth_start": m_Rth_start.item(), "sd_Rth_start": sd_Rth_start.item()},
        "Rth_MH": Rth_MH.numpy(),
        "muRth_MH": muRth_MH.numpy(),
        "sigmaRth_MH": sigmaRth_MH.numpy(),
        "Rth_accept": Rth_accept,
        "theta_accept": theta_accept,
        "acc_rate_Rth": acc_rate_Rth,
        "acc_rate_theta": acc_rate_theta,
        "duration": dur,
    }

    filename_i = f"MH_n100_s{si_num}.pt"
    torch.save(results_i, f"{wd_rproj}/_MCMC_output/_simstudy_results/{filename_i}")

    print("Mean muRth:", torch.mean(muRth_MH[mcmc["burnin"] + 1 : mcmc["nmc"]]))
    print("Mean sigmaRth:", torch.mean(sigmaRth_MH[mcmc["burnin"] + 1 : mcmc["nmc"]]))
