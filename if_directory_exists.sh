#!/bin/bash


##################################
# Script 16 if directory exists
#################################

# if directory exists
if [[ -d /Users/riteshkumarreddykuchukulla/GitHub/tutorial ]]; then
  echo 'tutorial directory exists'
fi

# if directory doesn't exist
if [[ !(-d /Users/riteshkumarreddykuchukulla/GitHub/tutorial/test) ]]; then
  echo 'test doesnt exist'
fi
