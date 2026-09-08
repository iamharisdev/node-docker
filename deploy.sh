#!/bin/bash

set -e

echo "Pulling latest Docker image..."

docker compose -f docker-compose.prod.yml pull app

echo "Restarting production application..."

docker compose -f docker-compose.prod.yml up -d

echo "Cleaning old images..."

docker image prune -f

echo "Deployment completed successfully!"