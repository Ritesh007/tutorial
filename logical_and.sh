#!/bin/bash


##################################
# Script 19 logical and
#################################

#variable declaration
a=20
b=20

# if logical and
if [[ $a == 20 && $b == 20 ]]; then
  echo 'inside logical and'
else
  echo 'outside logical and'
fi
