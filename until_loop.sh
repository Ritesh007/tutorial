#!/bin/bash


##################################
# Script 21 until loop
#################################

#variable declaration
a=9

# until loop
until [[ $a -gt 10 ]]; do
  echo $a
  a=$[$a+1]
done
