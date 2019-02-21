#!/bin/bash


##################################
# Script 19 logical or
#################################

#variable declaration
a=20
b=10

# if logical or
if [[ $a == 20 || $b == 20 ]]; then
  echo 'inside logical or'
else
  echo 'outside logical or'
fi
