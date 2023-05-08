nsim = 100




for i in range(1, nsim + 1):
  <<<<Unhandled Expression: 'si_num<-str_pad(i,3,pad="0") is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'ds<-readRDS(file.path(wd_rproj,"_prepared_data","_simstudy_data",paste0("s",si_num,"_01_100.rds"))) is not defined in one of apis'>>>>
  
  <<<<Unhandled Expression: 'n<-length(ds) is not defined in one of apis'>>>>
  
  
  
  <<<<Unhandled Expression: 'm_Rth_start<-runif(1,30,50) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'sd_Rth_start<-runif(1,0.1,10) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'location<-log(m_Rth_start^2/sqrt(sd_Rth_start^2+m_Rth_start^2)) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'shape<-sqrt(log(1+(sd_Rth_start^2/m_Rth_start^2))) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'Rth0_start<-rlnorm(n,meanlog=location,sdlog=shape) is not defined in one of apis'>>>>
  Rth0 = Rth0_start
  
  
  sigma = 0.5
  eta = 0.65
  eta_star = 1 - eta
  If_A = 0.68
  Vf = 11.909
  
  
  muRth0 = m_Rth_start
  sigmaRth0 = sd_Rth_start
  <<<<Unhandled Expression: 'theta0<-c(muRth0,sigmaRth0) is not defined in one of apis'>>>>
  
  <<<<Unhandled Expression: 'mcmc<-list() is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'defaultMCMC<-list(M=100000,burnin=20000,thin=1) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'mcmc<-modifyList(defaultMCMC,as.list(mcmc)) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'mcmc$M<-as.integer(mcmc$M) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'mcmc$burnin<-as.integer(mcmc$burnin) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'mcmc$thin<-as.integer(mcmc$thin) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'mcmc$nmc<-with(mcmc,M+burnin) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'mcmc$verbose'>>>> = 1000
  
  
  <<<<Unhandled Expression: 'Rth.accept<-theta.accept<-rep(0,mcmc$nmc) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'Rth_MH<-matrix(0,mcmc$nmc,n) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'muRth_MH<-rep(0,mcmc$nmc) is not defined in one of apis'>>>>
  <<<<Unhandled Expression: 'sigmaRth_MH<-rep(0,mcmc$nmc) is not defined in one of apis'>>>>
  
  
  u1 = 0
  u2 = 100
  s1 = 0
  s2 = 10
  
  
  eps_Rth = 0.035
  eps_theta = 0.15
  
  
  
  
  
  def compute.LL(,,y,,,,Rth,,,,eta_star,,,,If_A,,,,Vf,,,,sigma):
    mu = Rth * eta_star * If_A * Vf
    sig = sigma
    <<<<Unhandled Expression: 'LL<-sum(dnorm(x=y,mean=mu,sd=sig,log=TRUE)) is not defined in one of apis'>>>>
    return LL
  <<<<Unhandled Expression: 'compute.LL(y=ds,Rth=Rth0,eta_star=eta_star,If_A=If_A,Vf=Vf,sigma=sigma) is not defined in one of apis'>>>>
  
  
  
  <<<<Unhandled Expression: 'starttime<-proc.time()[3]'>>>>
  
  
  
  
  
  
  for m in range(1, <<<<Unhandled Expression: 'mcmc$nmc'>>>> + 1):
    <<<<Unhandled Expression: 'if(m==(mcmc$burnin+1))starttimeM<-proc.time()[3]'>>>>
    
    
    
    
    <<<<Unhandled Expression: 'Rth1<-rnorm(n,mean=Rth0,sd=eps_Rth) is not defined in one of apis'>>>>
    <<<<Unhandled Expression: 'mlog0<-log(theta0[1]^2/sqrt(theta0[2]^2+theta0[1]^2)) is not defined in one of apis'>>>>
    <<<<Unhandled Expression: 'slog0<-sqrt(log(1+(theta0[2]^2/theta0[1]^2))) is not defined in one of apis'>>>>
    
    
    <<<<Unhandled Expression: 'D1<-compute.LL(y=ds,Rth=Rth1,eta_star=eta_star,If_A=If_A,Vf=Vf,sigma=sigma) is not defined in one of apis'>>>><<<<Unhandled Expression: '+
sum(dlnorm(x=Rth1,meanlog=mlog0,sdlog=slog0,log=TRUE)) is not defined in one of apis'>>>>
<<<<Unhandled Expression: 'D0<-compute.LL(y=ds,Rth=Rth0,eta_star=eta_star,If_A=If_A,Vf=Vf,sigma=sigma) is not defined in one of apis'>>>><<<<Unhandled Expression: '+
sum(dlnorm(x=Rth0,meanlog=mlog0,sdlog=slog0,log=TRUE)) is not defined in one of apis'>>>>

<<<<Unhandled Expression: 'q1<-sum(dnorm(x=Rth1,mean=Rth0,sd=eps_Rth,log=TRUE)) is not defined in one of apis'>>>>
<<<<Unhandled Expression: 'q0<-sum(dnorm(x=Rth0,mean=Rth1,sd=eps_Rth,log=TRUE)) is not defined in one of apis'>>>>

Rth.alph = D1 - D0 - (q1 - q0)

<<<<Unhandled Expression: 'u<-runif(1,0,1) is not defined in one of apis'>>>>
if <<<<Unhandled Expression: 'log(u)<=min(Rth.alph,0) is not defined in one of apis'>>>>:
  Rth0 = Rth1
  <<<<Unhandled Expression: 'Rth.accept[m]'>>>> = 1else:
  Rth0 = Rth0
Rth.alph








<<<<Unhandled Expression: 'theta1<-rnorm(2,mean=theta0,sd=eps_theta) is not defined in one of apis'>>>>

<<<<Unhandled Expression: 'mlog1<-log(theta1[1]^2/sqrt(theta1[2]^2+theta1[1]^2)) is not defined in one of apis'>>>>
<<<<Unhandled Expression: 'slog1<-sqrt(log(1+(theta1[2]^2/theta1[1]^2))) is not defined in one of apis'>>>>

<<<<Unhandled Expression: 'D1<-sum(dlnorm(x=Rth0,meanlog=mlog1,sdlog=slog1,log=TRUE)) is not defined in one of apis'>>>><<<<Unhandled Expression: '+
dunif(x=theta1[1],u1,u2,log=TRUE) is not defined in one of apis'>>>><<<<Unhandled Expression: '+
dunif(x=theta1[2],s1,s2,log=TRUE) is not defined in one of apis'>>>>

<<<<Unhandled Expression: 'D0<-sum(dlnorm(x=Rth0,meanlog=mlog0,sdlog=slog0,log=TRUE)) is not defined in one of apis'>>>><<<<Unhandled Expression: '+
dunif(x=theta0[1],u1,u2,log=TRUE) is not defined in one of apis'>>>><<<<Unhandled Expression: '+
dunif(x=theta0[2],s1,s2,log=TRUE) is not defined in one of apis'>>>>

<<<<Unhandled Expression: 'q1<-sum(dnorm(x=theta1,mean=theta0,sd=eps_Rth,log=TRUE)) is not defined in one of apis'>>>>
<<<<Unhandled Expression: 'q0<-sum(dnorm(x=theta0,mean=theta1,sd=eps_Rth,log=TRUE)) is not defined in one of apis'>>>>

theta.alph = D1 - D0 - (q1 - q0)

<<<<Unhandled Expression: 'u<-runif(1,0,1) is not defined in one of apis'>>>>
if <<<<Unhandled Expression: 'log(u)<=min(theta.alph,0) is not defined in one of apis'>>>>:
  theta0 = theta1
  <<<<Unhandled Expression: 'theta.accept[m]'>>>> = 1else:
  theta0 = theta0



<<<<Unhandled Expression: 'Rth_MH[m,]'>>>> = Rth0
<<<<Unhandled Expression: 'muRth_MH[m]'>>>> = <<<<Unhandled Expression: 'theta0[1]'>>>>
<<<<Unhandled Expression: 'sigmaRth_MH[m]'>>>> = <<<<Unhandled Expression: 'theta0[2]'>>>>