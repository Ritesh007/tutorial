#!/bin/bash


##################################
# Script 18 el if
#################################

#variable declaration
a=20

# el if
if [[ $a == 10 ]]; then
  echo 'a is 10'
elif [[ $a == 20 ]]; then
  echo 'a is 20'
else
  echo 'a is not 10 or 20'
fi
