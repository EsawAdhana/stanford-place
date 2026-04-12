FROM node:24-alpine AS base
WORKDIR /app

COPY package.json package-lock.json tsconfig.base.json ./
COPY apps/web/package.json apps/web/package.json
COPY packages/shared/package.json packages/shared/package.json
COPY packages/db/package.json packages/db/package.json

RUN npm ci

COPY apps/web apps/web
COPY packages/shared packages/shared
COPY packages/db packages/db

RUN npm run db:generate -w packages/db && npm run build -w apps/web

WORKDIR /app/apps/web
CMD ["npm", "run", "start"]
