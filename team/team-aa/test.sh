#!/bin/bash

dd=$(find . -name code)

for d in $dd; do 
    p=${d%/*}
    mv ${p}/code ${p}/work
done


