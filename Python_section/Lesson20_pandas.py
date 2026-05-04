# import numpy as np
import pandas as pd
from matplotlib import pyplot as plt

# arr=np.array([[2, 11, 100],
#               [12, 4, 100],
#               [4, 14, 100]])

# df= pd.DataFrame(arr, columns=['x','y','z'])
# print(df)

df= pd.read_csv('btc_gold_price.csv')
print(df.shape)
print(df.head())
print(df.describe())

df.info()
df.set_index('Year').plot()
plt.show()
