#!/bin/bash

set -e

if [ ! -f .env ]; then
	echo ".env file is required on the deployment server"
	exit 1
fi

echo "Pulling latest source code..."

git pull --ff-only origin main

echo "Installing production dependencies..."

npm ci

echo "Applying database migrations..."

npm run db:migrate

echo "Starting application with PM2..."

./node_modules/.bin/pm2 startOrRestart ecosystem.config.js --env production
./node_modules/.bin/pm2 save

echo "Deployment completed successfully!"