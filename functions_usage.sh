#!/bin/bash


##################################
# Script 25 function call
#################################



# simple function
print_something () {
echo Hello I am a function
}

#function call
print_something

# function with parameters
echo_something () {
echo $1
}

#function call
echo_something hello

# other syntax
function test_something () {
echo $1
}

#function call
test_something test_something_function
