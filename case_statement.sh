#!/bin/bash


##################################
# Script 23 case statement
#################################


#case statement

case "$1" in

1)  echo "you passed 1 as argument"
    ;;
2)  echo  "you passed 2 as argument"
    ;;
3)  echo  "you passed 3 as argument"
    ;;
9) echo  "you passed 9 as argument"
   ;;
*) echo "Nothing was matched"
   ;;
esac
