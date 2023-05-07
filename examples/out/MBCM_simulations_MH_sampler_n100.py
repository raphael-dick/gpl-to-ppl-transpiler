nsim = 100


for i in range(1, NaN):
  


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



def compute.LL(,,y,,,,Rth,,,,eta_star,,,,If_A,,,,Vf,,,,sigma)   

mu = Rth * eta_star * If_A * Vf
sig = sigma
<<<<Unhandled Expression: 'LL<-sum(dnorm(x=y,mean=mu,sd=sig,log=TRUE)) is not defined in one of apis'>>>>
return LL