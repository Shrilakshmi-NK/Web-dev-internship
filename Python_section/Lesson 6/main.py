# from fastapi import FastAPI

# app = FastAPI()

# job_title = 'engineer'

# @app.get('/')
# async def root():
#   return {'fname': 'John', 'lname': 'Doe', 'age': 25, 'job_title': job_title, 'emp_id': 5}

# @app.put('/job_title/{new_job_title}')
# async def put_data(new_job_title: str):
#   global job_title
#   job_title = new_job_title
#   return {'job_title': job_title}

# # @app.get('/test')
# # async def test():
# #     return {"msg": "working"}

from fastapi import FastAPI

app = FastAPI()

list_of_jobs = list()

@app.get('/')
async def root():
  return {'fname' : 'John', 'lname' : 'Doe', 'age': 25, 'job_title': 'engineer', 'emp_id': 5}

@app.put ('/job title/{job title}')
async def put_data(job_title:str):
  print(job_title)
  list_of_jobs.append(job_title)
  return {'job_title':job_title}

@app.post('/postdata')
async def post_data(job_title:str):
  list_of_jobs.append(job_title)
  return {'job_title':list_of_jobs}

@app.delete('/deletedata/{job_title}')
async def delete_data(job_title:str):
  list_of_jobs.remove(job_title)
  return {'job_title':list_of_jobs}