#!/bin/bash


##################################
# Script 16 if file exists
#################################

# if file exists
if [[ -f /Users/riteshkumarreddykuchukulla/GitHub/tutorial/if_empty.sh ]]; then
  echo 'if_empty.sh exists'
fi

# if file doesn't exist
if [[ !(-f /Users/riteshkumarreddykuchukulla/GitHub/tutorial/empty.sh) ]]; then
  echo 'empty.sh doesnt exist'
fi
