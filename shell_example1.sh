#!/bin/bash

##############################################################################################################################
# 1. Shell script that greps for files that end with ‘.log’ in a particular directory and zip them.
# 2. And then delete the zipped files.
##############################################################################################################################

function file_list_zip () {
    find . -name *.log -exec gzip {} \;
}

function file_list_todelete () {
    find . -name *.log.gz -exec rm -rf {} \; 
}

file_list_zip

# file_list_todelete