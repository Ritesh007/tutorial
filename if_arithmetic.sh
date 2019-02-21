#!/bin/bash


##################################
# Script 4 arithmetic checks
#################################

# variable declaration
a=30
b=20
c=10
d=20
e=10
f=10

# Greater than check
if [[ $a -gt $b ]]; then
  echo 'a is greater than b'
fi

# Less than check
if [[ $c -lt $d ]]; then
  echo 'c is less than d'
fi

# Equal check 
if [[ $e==$f ]]; then
  echo 'e is equal to f'
fi
