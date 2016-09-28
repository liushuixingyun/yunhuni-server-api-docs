#!/bin/bash -e

#DEFAULT_BRANCH=master
#BRANCH=${1:-$DEFAULT_BRANCH}
#git checkout --force $BRANCH
#git reset --hard origin/$BRANCH

git_current_branch=$(git branch | grep \* | cut -d ' ' -f2)
git pull origin $git_current_branch
npm install
gitbook install
gitbook build
