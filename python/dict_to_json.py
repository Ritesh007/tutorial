#!/usr/bin/python


#########################
# python script 20
########################
import json

dict_name =  { "name_1":"aaa", "name_2":"bbb", "name_3":"ccc"}

#defining a class
class Class_name():
  def function1(self):
    # converts the above dict to json string
    y = json.dumps(dict_name)
    # the result is a Python dictionary:
    print(type(y))
   # print(y["name_1"])

#creating a object
class_object = Class_name()

#calling a def in class
class_object.function1()

