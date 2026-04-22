"""# Open a file
file = open("myfile.txt", "r")
 
# Read the contents of the file
contents = file.read()

# Print the file contents
print(contents)

# Close the file
file.close()"""

import csv
with open ('emp_data.csv' , 'r') as csv_file:
  csv_reader = csv.DictReader(csv_file)
  line_count = 0
  for row in csv_reader:
    if line_count==0:
      line_count+=1
      print(row)
      print(f'{row["name"]} works in the {row["dept"]} department.The employee\'s ID is {row["emp_id"]}.')
      line_count+=1
      print(f'Processed {line_count} lines.')
