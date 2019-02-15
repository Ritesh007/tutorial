#!/bin/bash


##################################
# Script 8 debug parts
#################################


#variable declaration
a=10
b="string"

set -x
#assigning variables to run time arguments
c=$1

# The ` symbol
d=`date`
set +x

echo $a
echo $b
echo $c
echo $d
