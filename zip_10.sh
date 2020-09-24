#!/bin/bash


##################################
# Script 10 zip 
#################################



# zip the file in the path that the user gives and if the file name is zipthefile
gzip $1/zipthefile

# create an empty file with the name zipthefile
echo > zipthefile

