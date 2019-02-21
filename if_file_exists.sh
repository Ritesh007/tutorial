#!/bin/bash


##################################
# Script 16 if file exists
#################################

# if file exists
if [[ -f /home/ubuntu/tutorial/tutorial/if_empty.sh ]]; then
  echo 'if_empty.sh exists'
fi

# if file doesn't exist
if [[ !(-f /home/ubuntu/tutorial/tutorial/empty.sh) ]]; then
  echo 'empty.sh doesnt exist'
fi
