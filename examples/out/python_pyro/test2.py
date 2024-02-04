import warnings
warnings.filterwarnings("ignore")
import numpy
import torch
from torch.distributions import uniform
import math

x = numpy.repeat(0., 100000)

for i in range(1, 100000 + 1):
  x[i-1] = torch.log(uniform.Uniform(0, 1).sample(torch.Size([1])))

print(torch.mean(torch.as_tensor(x).float()))