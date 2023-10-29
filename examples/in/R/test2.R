x <- rep(0, 100000)

for(i in 1:100000) {
  # x[i] <- runif(1, 0, 1)
  x[i] <- log(runif(1, 0, 1))
}

print(mean(x))