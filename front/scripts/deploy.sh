#! /usr/bin/env sh
set -x
npm run serve 
sleep 1
echo $! > .pidfile
set +x
