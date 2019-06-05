# !/bin/env bash
yarn doc
git checkout gh-pages
git merge dev
mv doc/* .
git add .
git commit -m "update doc"
git push
git checkout dev


