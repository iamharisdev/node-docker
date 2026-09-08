#!/bin/bash

set -e

echo "Pulling latest Docker image..."

docker compose pull app

echo "Restarting application..."

docker compose up -d

echo "Cleaning old images..."

docker image prune -f

echo "Deployment completed successfully!"
