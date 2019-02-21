#!/bin/bash


##################################
# Script 22 for loop
#################################

#array declaration
a=(1 2 3 4)

#print a variable in an array
echo ${a[1]}

# array for loop
for i in "${a[@]}"; do
  echo $i
done
