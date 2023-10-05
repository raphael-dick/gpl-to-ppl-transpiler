import numpy
from time import process_time
import torch
import torch.distributions
from torch.distributions import uniform, normal
import pyro.distributions
import math
import os
import pyreadr

nsim = 100


for i in range(1, nsim + 1):
  si_num = f'{i:{"0"}>{3}}'
  ds = pyreadr.read_r(os.path.join(wd_rproj, "_prepared_data", "_simstudy_data", "s" + si_num + "_01_100.rds"))
  
  n = len(ds)
  
  
  m_Rth_start = uniform.Uniform(30, 50).sample(torch.Size([1]))
  sd_Rth_start = uniform.Uniform(0.1, 10).sample(torch.Size([1]))
  location = torch.log(pow(m_Rth_start, 2) / torch.sqrt(pow(sd_Rth_start, 2) + pow(m_Rth_start, 2)))
  shape = torch.sqrt(torch.log(1 + (pow(sd_Rth_start, 2) / pow(m_Rth_start, 2))))
  Rth0_start = torch.exp(pyro.distributions.LogNormal(location, shape).sample(torch.Size([n])))
  Rth0 = Rth0_start
  
  sigma = 0.5
  eta = 0.65
  eta_star = 1 - eta
  If_A = 0.68
  Vf = 11.909
  
  muRth0 = m_Rth_start
  sigmaRth0 = sd_Rth_start
  theta0 = [muRth0, sigmaRth0]
  
  mcmc = list()
  defaultMCMC = { "M": 100000, "burnin": 20000, "thin": 1 }
  mcmc = {**defaultMCMC, **mcmc}
  mcmc["M"] = int(mcmc["M"])
  mcmc["burnin"] = int(mcmc["burnin"])
  mcmc["thin"] = int(mcmc["thin"])
  mcmc["nmc"] = mcmc["M"] + mcmc["burnin"]
  mcmc["verbose"] = 1000
  
  Rth_accept = theta_accept = numpy.repeat(0, mcmc["nmc"])
  Rth_MH = torch.full((n, mcmc["nmc"]), 0)
  muRth_MH = numpy.repeat(0, mcmc["nmc"])
  sigmaRth_MH = numpy.repeat(0, mcmc["nmc"])
  
  u1 = 0
  u2 = 100
  s1 = 0
  s2 = 10
  
  eps_Rth = 0.035
  eps_theta = 0.15
  
  
  
  def compute_LL(y,Rth,eta_star,If_A,Vf,sigma):
    mu = Rth * eta_star * If_A * Vf
    sig = sigma
    LL = torch.sum(torch.distributions.Normal(mu, sig).log_prob(y))
    return LL
  compute_LL(ds, Rth0, eta_star, If_A, Vf, sigma)
  
  
  
  starttime = [None, None, process_time()][2]
  
  
  
  
  for m in range(1, mcmc["nmc"] + 1):
    if m == (mcmc["burnin"] + 1):
      starttimeM = [None, None, process_time()][2]
    
    
    
    Rth1 = normal.Normal(Rth0, eps_Rth).sample(torch.Size([n]))
    mlog0 = torch.log(pow(theta0[0], 2) / torch.sqrt(pow(theta0[1], 2) + pow(theta0[0], 2)))
    slog0 = torch.sqrt(torch.log(1 + (pow(theta0[1], 2) / pow(theta0[0], 2))))
    
    D1 = compute_LL(ds, Rth1, eta_star, If_A, Vf, sigma) + torch.sum(torch.distributions.LogNormal(mlog0, slog0).log_prob(Rth1))
    D0 = compute_LL(ds, Rth0, eta_star, If_A, Vf, sigma) + torch.sum(torch.distributions.LogNormal(mlog0, slog0).log_prob(Rth0))
    
    q1 = torch.sum(torch.distributions.Normal(Rth0, eps_Rth).log_prob(Rth1))
    q0 = torch.sum(torch.distributions.Normal(Rth1, eps_Rth).log_prob(Rth0))
    
    Rth_alph = D1 - D0 - (q1 - q0)
    
    u = uniform.Uniform(0, 1).sample(torch.Size([1]))
    if torch.log(u) <= min(Rth_alph, 0):
      Rth0 = Rth1
      Rth_accept[m-1] = 1
    else:
      Rth0 = Rth0
    
    Rth_alph
    
    
    
    theta1 = normal.Normal(theta0, eps_theta).sample(torch.Size([2]))
    
    mlog1 = torch.log(pow(theta1[0], 2) / torch.sqrt(pow(theta1[1], 2) + pow(theta1[0], 2)))
    slog1 = torch.sqrt(torch.log(1 + (pow(theta1[1], 2) / pow(theta1[0], 2))))
    
    D1 = torch.sum(torch.distributions.LogNormal(mlog1, slog1).log_prob(Rth0)) + pyro.distributions.Uniform(u1, u2).log_prob(theta1[0]) + pyro.distributions.Uniform(s1, s2).log_prob(theta1[1])
    
    D0 = torch.sum(torch.distributions.LogNormal(mlog0, slog0).log_prob(Rth0)) + pyro.distributions.Uniform(u1, u2).log_prob(theta0[0]) + pyro.distributions.Uniform(s1, s2).log_prob(theta0[1])
    
    q1 = torch.sum(torch.distributions.Normal(theta0, eps_Rth).log_prob(theta1))
    q0 = torch.sum(torch.distributions.Normal(theta1, eps_Rth).log_prob(theta0))
    
    theta_alph = D1 - D0 - (q1 - q0)
    
    u = uniform.Uniform(0, 1).sample(torch.Size([1]))
    if torch.log(u) <= min(theta_alph, 0):
      theta0 = theta1
      theta_accept[m-1] = 1
    else:
      theta0 = theta0
    
    
    Rth_MH[m,,-1] = Rth0
    muRth_MH[m-1] = theta0[0]
    sigmaRth_MH[m-1] = theta0[1]
  finish = [None, None, process_time()][2]
  durT = finish - starttime
  durM = finish - starttimeM
  dur = { "total": durT, "durM": durM }
  
  acc_rate_Rth = round(torch.mean(Rth_accept[-[*list(range(1, mcmc["burnin"] + 1))]-1]) * 100, 2)
  acc_rate_theta = round(torch.mean(theta_accept[-[*list(range(1, mcmc["burnin"] + 1))]-1]) * 100, 2)
  
  print("\nMCMC info: \n", "acceptance Rth:  ", acc_rate_Rth, "\n", "acceptance theta:", acc_rate_theta, "\n\n")
  
  
  
  
  results_i = list(
mcmc = mcmc)
start = { "m_Rth_start": m_Rth_start }
sd_Rth_start = sd_Rth_start