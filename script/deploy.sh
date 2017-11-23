#!/bin/bash

current_dir=$(cd "$(dirname $0)" && pwd)
deploy_dir=$current_dir/.deploy

([ -e $deploy_dir ] || (git clone git@github.com:LondonTrustMedia/zcash_blackfriday_web.git $deploy_dir)) && cd $deploy_dir && git pull

rsync -hPvaz $deploy_dir/web/ root@coinsweb.londontrustmedia.com:/var/www/zcash.blackfriday/

echo "Done!"
