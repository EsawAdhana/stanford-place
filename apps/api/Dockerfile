FROM node:24-alpine AS base
WORKDIR /app

COPY package.json package-lock.json tsconfig.base.json ./
COPY apps/api/package.json apps/api/package.json
COPY packages/shared/package.json packages/shared/package.json
COPY packages/db/package.json packages/db/package.json

RUN npm ci

COPY apps/api apps/api
COPY packages/shared packages/shared
COPY packages/db packages/db

RUN npm run db:generate -w packages/db && npm run build -w apps/api

WORKDIR /app/apps/api
CMD ["node", "dist/index.js"]
