#!/bin/bash

sudo cp -r ./build/* /var/www/html/

sudo touch /var/cache/mod_pagespeed/cache.flush

sudo systemctl restart apache2
