import json
import matplotlib.pyplot as plt
from numpy import mean

n = 100
prefix = 'r'
# prefix = 'python'

field_names_r = {
  'acc_rate_Rth': 'acc.rate_Rth',
  'acc_rate_theta': 'acc.rate_theta',
  'duration_total': ['duration', 'total', 'elapsed'],
}

field_names_pyro = {
  'acc_rate_Rth': 'acc_rate_Rth',
  'acc_rate_theta': 'acc_rate_theta',
  'duration_total': ['duration', 'total'],
}

data = [
  {
    "name": 'R I',
    "path": './data/R/1/',
    "field_names": field_names_r,
  },

  {
    "name": 'R II',
    "path": './data/R/2/',
    "field_names": field_names_r,
  },

  {
    "name": 'R III',
    "path": './data/R/3/',
    "field_names": field_names_r,
  },

  {
    "name": 'R IV',
    "path": './data/R/4/',
    "field_names": field_names_r,
  },

  {
    "name": 'R V',
    "path": './data/R/5/',
    "field_names": field_names_r,
  },

  # {
  #   "name": 'Pyro I',
  #   "path": './data/pyro/1/',
  #   "field_names": field_names_pyro,
  # },

  # {
  #   "name": 'Pyro II',
  #   "path": './data/pyro/2/',
  #   "field_names": field_names_pyro
  # }, 

  # {
  #   "name": 'Pyro III',
  #   "path": './data/pyro/3/',
  #   "field_names": field_names_pyro
  # }, 

  # {
  #   "name": 'Pyro IV',
  #   "path": './data/pyro/4/',
  #   "field_names": field_names_pyro
  # }, 

  # {
  #   "name": 'Pyro V',
  #   "path": './data/pyro/5/',
  #   "field_names": field_names_pyro
  # }, 
]

def getDeepValue(dat, field_name_parts):
  temp = dat
  for field_name in field_name_parts:
    temp = temp[field_name]
  return temp

for target in data:
  print(f'loading data for {target["name"]}')
  target['acc_rate_Rth'] = []
  target['acc_rate_theta'] = []
  target['duration_total'] = []
  
  for i in range(0, n):
    field_names = target['field_names']

    si_num = f'{(i+1):{"0"}>{3}}'
    print(f'  loading {target["name"]} si {si_num}')
    file_path = f"{target['path']}/MH_n100_s{si_num}.json"

    with open(file_path, 'r') as file:
      dat = json.load(file)
      target['acc_rate_Rth'].append(dat[field_names['acc_rate_Rth']])
      target['acc_rate_theta'].append(dat[field_names['acc_rate_theta']])
      target['duration_total'].append(getDeepValue(dat, field_names['duration_total']))

print('plotting data ...')

def boxplot(criteria):
  print(f'{criteria}:')
  plt.figure(figsize=(len(data) * 2, 5))

  # plt.title(f'Boxplot of {criteria}')

  for idx, target in enumerate(data):
    # plt.boxplot(data[idx][criteria], positions=[len(data) - idx], widths=0.75, vert=False, labels=[target['name']])
    plt.boxplot(data[idx][criteria], positions=[idx], widths=0.75, vert=True, labels=[target['name']])
    print(f'  {target["name"]} (mean): {mean(data[idx][criteria])}')

  plt.savefig(f'./figures/{prefix}-{criteria}-boxplot-n{n}.png', bbox_inches='tight', transparent="True", pad_inches=0)
  print('')
  # plt.show()

boxplot('duration_total')
boxplot('acc_rate_Rth')
boxplot('acc_rate_theta')