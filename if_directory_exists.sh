#!/bin/bash


##################################
# Script 16 if directory exists
#################################

# if directory exists
if [[ -d /home/ubuntu/tutorial/tutorial ]]; then
  echo 'tutorial directory exists'
fi

# if directory doesn't exist
if [[ !(-d /home/ubuntu/tutorial/test) ]]; then
  echo 'test doesnt exist'
fi
