#!/bin/bash -e

# 默认分支
#DEFAULT_BRANCH=master
# 当前分支
CURRENT_BRANCH=$(git branch | grep \* | cut -d ' ' -f2)
# 目标分支，使用参数[1]，如没有参数，使用当前分支作为目标分支
#TARGET_BRANCH=${1:-$CURRENT_BRANCH}
# 检出服务器上最新的目标分支
git fetch
git checkout --force $CURRENT_BRANCH
git reset --hard origin/$CURRENT_BRANCH
# npm 准备
npm install
# gitbook 构建
gitbook install
gitbook build
