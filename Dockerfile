# =========================
# Stage 1: Dependencies
# =========================
FROM node:22-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci


# =========================
# Stage 2: Production
# =========================
FROM node:22-alpine AS production

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY package*.json ./
COPY src ./src

# Run application as non-root user
USER node

EXPOSE 3000

CMD ["npm", "start"]