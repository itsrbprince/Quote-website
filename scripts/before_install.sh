#!/bin/bash

# navigate to app folder
cd /app

# install node and npm
curl -sL https://rpm.nodesource.com/setup_18.x | sudo -E bash -
yum -y install nodejs npm