#!/usr/bin/python


#########################
# python script 21
########################
from os import system


#defining a class
class Class_name():
  def function1(self):
    system("ls -ltr & df -h & ./dict_to_json.py")

#creating a object
class_object = Class_name()

#calling a def in class
class_object.function1()

