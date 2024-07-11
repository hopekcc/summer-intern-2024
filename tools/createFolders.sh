#!/bin/bash

teamID=$1
name=$2
mypath=${0%/*}

[ -z ${name} -o -z ${teamID} ] && echo "no name or team" && 
    echo "usage: $0 <teamID> <name>. For example: $0 os nini" && exit

team="team-${teamID}"

echo "creating folders for ${name} in ${team}"
for i in $(seq 4); do
    echo "week${i}"

    mkdir -p ${team}/${name}/week${i}/code
    mkdir -p ${team}/${name}/week${i}/presentation
    cp ${mypath}/gitignore ${team}/${name}/week${i}/code/.gitignore
    cp ${mypath}/gitignore ${team}/${name}/week${i}/presentation/.gitignore
done






