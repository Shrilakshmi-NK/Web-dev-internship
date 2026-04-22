# # using append method
# # Allows us to add data to an external file where data already exists.
# with open("file.txt", "a") as f:
# f.write("\nThis will be added to the end")

# # using write method
# # Will overwrite any existing data in the external file.
# with open("file.txt", "w") as f:
# f.write("This will overwrite any existing content")

# # create a new file
# f = open("newfile.txt", "w")
# f.write("Hello World!")
# f.close 


# with open('txtfile.txt', 'a') as file:
#   file.write("\nThis is a new text which is appended")

# with open('new_file.txt', 'w') as file:
#   file.write("This is a new file created")
#   file.close()

# fruit_list = ['Apple ', 'Orange ', 'Bananas ', 'Grapes', 'Peach']

# with open('fruits.txt','w') as f_list:
#   for f in fruit_list:
#     f_list.write("\n"+f)


# content = open('fruits.txt')
# print(content.read())

def count_words(file_path):
  with open(file_path) as file:
    data= file.read()
    data.replace(","," ")
    return len(data.split(" "))

print(count_words('maine_coon.txt'))