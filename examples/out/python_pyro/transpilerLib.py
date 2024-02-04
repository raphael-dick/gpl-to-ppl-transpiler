import numpy
import torch
import json

def convertPytorchToJson(data):
  def to_serializable(val):
    if isinstance(val, torch.Tensor):
      return val.cpu().detach().numpy().tolist()
    elif isinstance(val, numpy.ndarray):
      return val.tolist()
    elif isinstance(val, dict):
      return {k: to_serializable(v) for k, v in val.items()}
    elif isinstance(val, list):
      return [to_serializable(item) for item in val]
    elif isinstance(val, tuple):
      return tuple(to_serializable(item) for item in val)
    else:
      return val

  serialized_data = {k: to_serializable(v) for k, v in data.items()}
  return(json.dumps(serialized_data, indent=2))


def asTensor(value):
  if torch.is_tensor(value):
    return(value)
  else:
    torch.tensor(value)