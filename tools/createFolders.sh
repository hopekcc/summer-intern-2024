#!/bin/bash

teamID=$1
name=$2
mypath=${0%/*}

[ -z ${teamID} ] && echo "no team assigned" && 
    echo "usage: $0 <teamID> <name>. For example: $0 os nini" && exit

team="team-${teamID}"

echo "creating folders for ${team}"
mkdir -p ${team}/project/code/
mkdir -p ${team}/project/presentation/
cp ${mypath}/gitignore ${team}/project/code/.gitignore
cp ${mypath}/gitignore ${team}/project/presentation/.gitignore

[ -z ${name} ] && echo "no student assigned. Skip student folders" && exit

echo "creating folders for ${name} in ${team}"
for i in $(seq 4); do
    echo "week${i}"

    mkdir -p ${team}/${name}/week${i}/code
    mkdir -p ${team}/${name}/week${i}/presentation
    cp ${mypath}/gitignore ${team}/${name}/week${i}/code/.gitignore
    cp ${mypath}/gitignore ${team}/${name}/week${i}/presentation/.gitignore
done






