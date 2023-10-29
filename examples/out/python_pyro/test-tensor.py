# import pyreadr
# import os
# import torch

# from torch.distributions import normal

# theta0 = [41.4336, 0.7319]
# eps_theta = 0.15

# print(torch.tensor(theta0))

# theta1 = normal.Normal(torch.tensor(theta0), eps_theta).sample()
# print(theta1)

x = [1, 2, 3, 4, 5]
burnin = 2
sub = x[burnin:]
print(sub)
