#!/usr/bin/python


#########################
# python script 19
########################

# definig a dict variable
name_dict =	{
  "name1": "aaa",
  "name2": "bbb",
  "name3": "ccc"
}

#defining a class
class Class_name():
  def __init__(self):
   self.name = "name"
  def loop_dict(self,name_dict):
    for i,j in name_dict.items():
      print(i,j)

#creating a object
class_object = Class_name()

#calling a def in class
class_object.loop_dict(name_dict)

