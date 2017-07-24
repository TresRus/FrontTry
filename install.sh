#!/bin/bash

if [ $# -lt 1 ]; then
	echo "usage: $0 <site>"
	exit 1
fi

repo_dir=$PWD
site=$1

mv /etc/nginx/sites-available/default /etc/nginx/sites-available/default.bkp
cat nginx.conf.in | sed "s@%repo_dir%@$repo_dir@" | sed "s@%site%@$site@" > /etc/nginx/sites-available/default

systemctl restart nginx

