"""w="Hola!"

try:
  print(w)

except NameError:
  print("w is not defined")

except:
  print("w not defined")"""

#-------------------------------------------------------------------

"""import math

# try:
#    x=math.sqrt(-100)
#    print(x)

try:
  x=math.sqrt('Hi')
  print(x)

except NameError:
  print('x not defined')

except ValueError:
  print('Positive number expected for square root operation')

except TypeError:
  print('x is not an integer')"""

#-------------------------------------------------------------------

"""try:
  print('Hello World')

# try:
#   print('Hello World'+1)

except :
  print('Something went wrong')

else:
  print('No errors where caught')"""

#-------------------------------------------------------------------

x=5
y=5
# y='bye'

try:
  print(x+y)

except TypeError:
  print ('You cannot add a string and integer')

finally:
  print('The code has completed execution')
