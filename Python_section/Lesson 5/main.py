from fastapi import FastAPI
import random

app=FastAPI()

data = {'fname' : 'John', 'lname' : 'Doe', 'age': 25, 'job_title': 'engineer', 'emp_id': 5}

@app.get('/')

#entry point of the API application 
async def root():
  # return {'fname' : 'John', 'lname' : 'Doe', 'age': 25, 'job_title': 'engineer', 'emp_id': 5}
  return data


#created a new endpoint form root endpoint
@app.get('/random')
async def rand_emp_id():
  rand:int = random.randint(0,50)
  data['emp_id'] = rand
  return data

