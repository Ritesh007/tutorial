#!/usr/bin/python


#########################
# python script 23
########################
from os import system


#defining a class
class Class_name():
  def function1(self):
    system("aws route53 change-resource-record-sets --hosted-zone-id Z3G223S2QRA3MJ --change-batch file:///home/ubuntu/sample.json")
#creating a object
class_object = Class_name()

#calling a def in class
class_object.function1()

