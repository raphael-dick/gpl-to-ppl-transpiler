############################################################################## #
# Filename
#   MBCM_simulations_MH_sampler_n100.R
#
# Description
#   MH algorithm - setting n=100 (sim)
#
# Project   MBCM: UQ for LED Use Case
# Author(s) author <michaela.dvorzak@joanneum.at>,
#           author2 <ulrike.kleb@joanneum.at>
# Date      2022-05-19
# 
# Copyright JOANNEUM RESEARCH, 2022
############################################################################## #

nsim <- 100

# setting: 
# n=100 

for (i in 1:nsim){

  # read simulated dataset
  si_num <- str_pad(i, 3, pad = "0")
  ds <- readRDS(file.path(wd_rproj, "_prepared_data", "_simstudy_data", paste0("s", si_num, "_01_100.rds")))  

  n <- length(ds)
  
  
  # *** Rth0 ***
  m_Rth_start <- runif(1, 30, 50)
  sd_Rth_start <- runif(1, 0.1, 10) 
  location <- log(m_Rth_start^2 / sqrt(sd_Rth_start^2 + m_Rth_start^2))
  shape <- sqrt(log(1+(sd_Rth_start^2/m_Rth_start^2)))
  Rth0_start <- rlnorm(n, meanlog = location, sdlog = shape) 
  Rth0 <- Rth0_start
  
  # parameters (fixed)
  sigma <- 0.5
  eta <- 0.65
  eta_star <- 1-eta
  If_A <- 0.68
  Vf <- 11.909
  
  # initialization (starting values)
  muRth0 <- m_Rth_start
  sigmaRth0 <- sd_Rth_start
  theta0 <- c(muRth0, sigmaRth0)
  
  mcmc <- list()
  defaultMCMC <- list(M = 100000, burnin = 20000, thin = 1)
  mcmc <- modifyList(defaultMCMC, as.list(mcmc))
  mcmc$M <- as.integer(mcmc$M)
  mcmc$burnin <- as.integer(mcmc$burnin)
  mcmc$thin <- as.integer(mcmc$thin)
  mcmc$nmc <- with(mcmc, M + burnin)
  mcmc$verbose <- 1000
  
  # for saving
  Rth.accept <- theta.accept <- rep(0, mcmc$nmc)
  Rth_MH <- matrix(0, mcmc$nmc, n)
  muRth_MH <- rep(0, mcmc$nmc)
  sigmaRth_MH <- rep(0, mcmc$nmc)
  
  # priors
  u1 <- 0
  u2 <- 100
  s1 <- 0
  s2 <- 10
  
  # tuning (n=100)
  eps_Rth <- 0.035
  eps_theta <- 0.15

  
  
  # // --- needed functions --- \\
  # forward model M(vartheta): Rth*eta_star*If_A*Vf
  compute.LL <- function(y = y, Rth = Rth, eta_star = eta_star, If_A = If_A, Vf = Vf, sigma = sigma){
    # mean = forward model 
    # sigma (known in the default case)
    mu  <- Rth*eta_star*If_A*Vf
    sig <- sigma
    LL  <- sum(dnorm(x = y, mean = mu, sd = sig, log = TRUE))
    return(LL)
  }
  # compute.LL(y = ds, Rth = Rth0, eta_star = eta_star, If_A = If_A, Vf = Vf, sigma = sigma)
  compute.LL(ds, Rth = Rth0, eta_star = eta_star, If_A = If_A, Vf = Vf, sigma = sigma)
  
  
  
  starttime <- proc.time()[3]  
  
  
  
  ##############################################################################~#
  # MH sampler ###################################################################
  
  for(m in 1:mcmc$nmc){
  
    ## time since burn-in phase
    if (m == (mcmc$burnin + 1)) starttimeM <- proc.time()[3] 

    #=============================================================================~=
    # _ 1: Sample Rth ==============================================================
    
    Rth1  <- rnorm(n, mean = Rth0, sd = eps_Rth)
    mlog0 <- log(theta0[1]^2 / sqrt(theta0[2]^2 + theta0[1]^2))
    slog0 <- sqrt(log(1 + (theta0[2]^2/theta0[1]^2)))
    
    # computing acceptance prob.
    D1 <- compute.LL(y = ds, Rth = Rth1, eta_star = eta_star, If_A = If_A, Vf = Vf, sigma = sigma) +
      sum(dlnorm(x = Rth1, meanlog = mlog0, sdlog = slog0, log = TRUE))
    D0 <- compute.LL(y = ds, Rth = Rth0, eta_star = eta_star, If_A = If_A, Vf = Vf, sigma = sigma) +
      sum(dlnorm(x = Rth0, meanlog = mlog0, sdlog = slog0, log = TRUE))
    
    q1 <- sum(dnorm(x = Rth1, mean = Rth0, sd = eps_Rth, log = TRUE))
    q0 <- sum(dnorm(x = Rth0, mean = Rth1, sd = eps_Rth, log = TRUE)) 
    
    Rth.alph <- D1 - D0 - (q1 - q0)
    
    u <- runif(1, 0, 1)
    if(log(u) <= min(Rth.alph, 0)){
      Rth0 <- Rth1
      Rth.accept[m] <- 1
    } else {
      Rth0 <- Rth0
    }
    Rth.alph
    
    #=============================================================================~=
    # _ 2: (Block) Sample muRth0 and sigmaRth0 =====================================
    
    # muRth and sigmaRth have a uniform prior
    # muRth ~ U[u1,u2]
    # sigmaRth ~ U[s1,s2]
    
    theta1 <- rnorm(2, mean = theta0, sd = eps_theta)
    
    mlog1 <- log(theta1[1]^2 / sqrt(theta1[2]^2 + theta1[1]^2))
    slog1 <- sqrt(log(1 + (theta1[2]^2/theta1[1]^2)))
    
    D1 <- sum(dlnorm(x = Rth0, meanlog = mlog1, sdlog = slog1, log = TRUE)) +
      dunif(x = theta1[1], u1, u2, log = TRUE) + 
      dunif(x = theta1[2], s1, s2, log = TRUE)
    
    D0 <- sum(dlnorm(x = Rth0, meanlog = mlog0, sdlog = slog0, log = TRUE)) +
      dunif(x = theta0[1], u1, u2, log = TRUE) + 
      dunif(x = theta0[2], s1, s2, log = TRUE)
    
    q1 <- sum(dnorm(x = theta1, mean = theta0, sd = eps_Rth, log = TRUE)) 
    q0 <- sum(dnorm(x = theta0, mean = theta1, sd = eps_Rth, log = TRUE)) 
    
    theta.alph <- D1 - D0 - (q1 - q0)
    
    u <- runif(1, 0, 1)
    if(log(u) <= min(theta.alph, 0)){
      theta0 <- theta1
      theta.accept[m] <- 1
    } else {
      theta0 <- theta0
    }
    
    #=============================================================================~=
    # _ save draws =================================================================
    Rth_MH[m,]     <- Rth0 
    muRth_MH[m]    <- theta0[1]
    sigmaRth_MH[m] <- theta0[2] 
    
  } #end (MCMC)
  
  finish <- proc.time()[3]
  durT <- finish - starttime
  durM <- finish - starttimeM
  dur  <- list(total = durT, durM = durM) 
  
  # acceptance rates:
  acc.rate_Rth <- round(mean(Rth.accept[-c(1:mcmc$burnin)])*100, 2)
  acc.rate_theta <- round(mean(theta.accept[-c(1:mcmc$burnin)])*100, 2)
  
  cat("\nMCMC info: \n", "acceptance Rth:  ", acc.rate_Rth, "\n", "acceptance theta:", acc.rate_theta, "\n\n")

  
  
  #=============================================================================~=
  # _ SAVE RESULTS ===============================================================
  
  results_i <- list(
    mcmc = mcmc,
    start = list(m_Rth_start = m_Rth_start, 
                 sd_Rth_start = sd_Rth_start),
    Rth_MH = Rth_MH,
    muRth_MH = muRth_MH,
    sigmaRth_MH = sigmaRth_MH,
    Rth.accept = Rth.accept,
    theta.accept = theta.accept,
    acc.rate_Rth = acc.rate_Rth,
    acc.rate_theta = acc.rate_theta,
    duration = dur
  )
  
  filename_i <- paste0("MH_n100_s", si_num, ".rds")
  saveRDS(object = results_i,
          file = file.path(wd_rproj, "_MCMC_output", "_simstudy_results", filename_i))
  
  
  mean(muRth_MH[(mcmc$burnin + 1):mcmc$nmc])
  mean(sigmaRth_MH[(mcmc$burnin + 1):mcmc$nmc])
  
}


