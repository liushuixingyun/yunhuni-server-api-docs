DEFAULT_BRANCH=master
BRANCH=${1:-$DEFAULT_BRANCH}
git checkout --force $BRANCH
git pull
git reset --hard origin/$BRANCH
npm install
gitbook install
gitbook build
