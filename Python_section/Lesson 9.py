def multiplication(x,y):
  return x*y
print(multiplication(2,5))

z=lambda x,y:x*y
print(z(10,2))

def multiplication_lambda(n):
  return lambda a:a*n

x=multiplication_lambda(2)
print(x(6))

num_list=[1,2,3,4,5,6,7,8,9,10,11,12]

x=list(filter(lambda num:num%2==0, num_list))
print(x)