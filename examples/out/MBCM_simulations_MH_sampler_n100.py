nsim = 100




for i in range(1, nsim + 1):
  si_num = f'{i:{"0"}>{3}}'
  ds = <<<<Unhandled Expression: 'readRDS(file.path(wd_rproj,"_prepared_data","_simstudy_data",paste0("s",si_num,"_01_100.rds"))) is not defined in one of apis'>>>>
  
  n = <<<<Unhandled Expression: 'length(ds) is not defined in one of apis'>>>>
  
  
  
  m_Rth_start = <<<<Unhandled Expression: 'runif(1,30,50) is not defined in one of apis'>>>>
  sd_Rth_start = <<<<Unhandled Expression: 'runif(1,0.1,10) is not defined in one of apis'>>>>
  location = <<<<Unhandled Expression: 'log(m_Rth_start^2/sqrt(sd_Rth_start^2+m_Rth_start^2)) is not defined in one of apis'>>>>
  shape = <<<<Unhandled Expression: 'sqrt(log(1+(sd_Rth_start^2/m_Rth_start^2))) is not defined in one of apis'>>>>
  Rth0_start = <<<<Unhandled Expression: 'rlnorm(n,meanlog=location,sdlog=shape) is not defined in one of apis'>>>>
  Rth0 = Rth0_start
  
  
  sigma = 0.5
  eta = 0.65
  eta_star = 1 - eta
  If_A = 0.68
  Vf = 11.909
  
  
  muRth0 = m_Rth_start
  sigmaRth0 = sd_Rth_start
  theta0 = <<<<Unhandled Expression: 'c(muRth0,sigmaRth0) is not defined in one of apis'>>>>
  
  mcmc = <<<<Unhandled Expression: 'list() is not defined in one of apis'>>>>
  defaultMCMC = <<<<Unhandled Expression: 'list(M=100000,burnin=20000,thin=1) is not defined in one of apis'>>>>
  mcmc = <<<<Unhandled Expression: 'modifyList(defaultMCMC,as.list(mcmc)) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'mcmc$M'>>>> = <<<<Unhandled Expression: 'as.integer(mcmc$M) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'mcmc$burnin'>>>> = <<<<Unhandled Expression: 'as.integer(mcmc$burnin) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'mcmc$thin'>>>> = <<<<Unhandled Expression: 'as.integer(mcmc$thin) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'mcmc$nmc'>>>> = <<<<Unhandled Expression: 'with(mcmc,M+burnin) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'mcmc$verbose'>>>> = 1000
  
  
  Rth.accept = theta.accept = <<<<Unhandled Expression: 'rep(0,mcmc$nmc) is not defined in one of apis'>>>>
  Rth_MH = <<<<Unhandled Expression: 'matrix(0,mcmc$nmc,n) is not defined in one of apis'>>>>
  muRth_MH = <<<<Unhandled Expression: 'rep(0,mcmc$nmc) is not defined in one of apis'>>>>
  sigmaRth_MH = <<<<Unhandled Expression: 'rep(0,mcmc$nmc) is not defined in one of apis'>>>>
  
  
  u1 = 0
  u2 = 100
  s1 = 0
  s2 = 10
  
  
  eps_Rth = 0.035
  eps_theta = 0.15
  
  
  
  
  
  def compute.LL(,,y,,,,Rth,,,,eta_star,,,,If_A,,,,Vf,,,,sigma):
    mu = Rth * eta_star * If_A * Vf
    sig = sigma
    LL = <<<<Unhandled Expression: 'sum(dnorm(x=y,mean=mu,sd=sig,log=TRUE)) is not defined in one of apis'>>>>
    return LL
  <<<<Unhandled Expression: 'compute.LL(y=ds,Rth=Rth0,eta_star=eta_star,If_A=If_A,Vf=Vf,sigma=sigma) is not defined in one of apis'>>>>
  
  
  
  starttime = <<<<Unhandled Expression: 'proc.time()[3]'>>>>
  
  
  
  
  
  
  for m in range(1, <<<<Unhandled Expression: 'mcmc$nmc'>>>> + 1):
    if m == (<<<<Unhandled Expression: 'mcmc$burnin'>>>> + 1):
    starttimeM = <<<<Unhandled Expression: 'proc.time()[3]'>>>>
    
    
    
    
    Rth1 = <<<<Unhandled Expression: 'rnorm(n,mean=Rth0,sd=eps_Rth) is not defined in one of apis'>>>>
    mlog0 = <<<<Unhandled Expression: 'log(theta0[1]^2/sqrt(theta0[2]^2+theta0[1]^2)) is not defined in one of apis'>>>>
    slog0 = <<<<Unhandled Expression: 'sqrt(log(1+(theta0[2]^2/theta0[1]^2))) is not defined in one of apis'>>>>
    
    
    D1 = <<<<Unhandled Expression: 'compute.LL(y=ds,Rth=Rth1,eta_star=eta_star,If_A=If_A,Vf=Vf,sigma=sigma) is not defined in one of apis'>>>><<<<Unhandled Expression: '+
sum(dlnorm(x=Rth1,meanlog=mlog0,sdlog=slog0,log=TRUE)) is not defined in one of apis'>>>>
D0 = <<<<Unhandled Expression: 'compute.LL(y=ds,Rth=Rth0,eta_star=eta_star,If_A=If_A,Vf=Vf,sigma=sigma) is not defined in one of apis'>>>><<<<Unhandled Expression: '+
sum(dlnorm(x=Rth0,meanlog=mlog0,sdlog=slog0,log=TRUE)) is not defined in one of apis'>>>>

q1 = <<<<Unhandled Expression: 'sum(dnorm(x=Rth1,mean=Rth0,sd=eps_Rth,log=TRUE)) is not defined in one of apis'>>>>
q0 = <<<<Unhandled Expression: 'sum(dnorm(x=Rth0,mean=Rth1,sd=eps_Rth,log=TRUE)) is not defined in one of apis'>>>>

Rth.alph = D1 - D0 - (q1 - q0)

u = <<<<Unhandled Expression: 'runif(1,0,1) is not defined in one of apis'>>>>
if <<<<Unhandled Expression: 'log(u)<=min(Rth.alph,0) is not defined in one of apis'>>>>:
  Rth0 = Rth1
  <<<<Unhandled Expression: 'Rth.accept[m]'>>>> = 1else:
  Rth0 = Rth0
Rth.alph








theta1 = <<<<Unhandled Expression: 'rnorm(2,mean=theta0,sd=eps_theta) is not defined in one of apis'>>>>

mlog1 = <<<<Unhandled Expression: 'log(theta1[1]^2/sqrt(theta1[2]^2+theta1[1]^2)) is not defined in one of apis'>>>>
slog1 = <<<<Unhandled Expression: 'sqrt(log(1+(theta1[2]^2/theta1[1]^2))) is not defined in one of apis'>>>>

D1 = <<<<Unhandled Expression: 'sum(dlnorm(x=Rth0,meanlog=mlog1,sdlog=slog1,log=TRUE)) is not defined in one of apis'>>>><<<<Unhandled Expression: '+
dunif(x=theta1[1],u1,u2,log=TRUE) is not defined in one of apis'>>>><<<<Unhandled Expression: '+
dunif(x=theta1[2],s1,s2,log=TRUE) is not defined in one of apis'>>>>

D0 = <<<<Unhandled Expression: 'sum(dlnorm(x=Rth0,meanlog=mlog0,sdlog=slog0,log=TRUE)) is not defined in one of apis'>>>><<<<Unhandled Expression: '+
dunif(x=theta0[1],u1,u2,log=TRUE) is not defined in one of apis'>>>><<<<Unhandled Expression: '+
dunif(x=theta0[2],s1,s2,log=TRUE) is not defined in one of apis'>>>>

q1 = <<<<Unhandled Expression: 'sum(dnorm(x=theta1,mean=theta0,sd=eps_Rth,log=TRUE)) is not defined in one of apis'>>>>
q0 = <<<<Unhandled Expression: 'sum(dnorm(x=theta0,mean=theta1,sd=eps_Rth,log=TRUE)) is not defined in one of apis'>>>>

theta.alph = D1 - D0 - (q1 - q0)

u = <<<<Unhandled Expression: 'runif(1,0,1) is not defined in one of apis'>>>>
if <<<<Unhandled Expression: 'log(u)<=min(theta.alph,0) is not defined in one of apis'>>>>:
  theta0 = theta1
  <<<<Unhandled Expression: 'theta.accept[m]'>>>> = 1else:
  theta0 = theta0



<<<<Unhandled Expression: 'Rth_MH[m,]'>>>> = Rth0
<<<<Unhandled Expression: 'muRth_MH[m]'>>>> = <<<<Unhandled Expression: 'theta0[1]'>>>>
<<<<Unhandled Expression: 'sigmaRth_MH[m]'>>>> = <<<<Unhandled Expression: 'theta0[2]'>>>>