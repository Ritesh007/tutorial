#!/bin/bash


##################################
# Script 20 logical or with error
#################################

#variable declaration
a=20
b=10

# if logical or
if [[ $a == 20 || $b == 20 ]]; then
  echo 'inside logical or'
else
  echo 'outsid'e logical or'
fi
