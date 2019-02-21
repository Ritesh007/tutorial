#!/bin/bash


##################################
# Script 20 while loop
#################################

#variable declaration
a=20

# while loop
while [[ $a -gt 10 ]]; do
  echo $a
  a=$[$a-1]
done
