#!/bin/bash


##################################
# Script 24 declare variable
#################################


#variable declaration
declare x=10

# declare read only variable
declare -r y=20

# declare integer variable 
declare -i z=30

# lets first echo them
echo $x
echo $y
echo $z

#lets change them
x=20
y=30
z="test"

echo $x
echo $y
echo $z


