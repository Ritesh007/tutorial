#!/usr/bin/python


#########################
# python script 19
########################
import json

json_name =  '{ "name_1":"aaa", "name_2":"bbb", "name_3":"ccc"}'

#defining a class
class Class_name():
  def function1(self):
    # parse json by converting it to dict
    y = json.loads(json_name)
    # the result is a Python dictionary:
    print(type(y))
    print(y["name_1"])

#creating a object
class_object = Class_name()

#calling a def in class
class_object.function1()

