FROM node:24-alpine AS development-environment
COPY umeboshi /app
WORKDIR /app
RUN npm ci

FROM node:24-alpine AS production-environment
COPY umeboshi/package.json umeboshi/package-lock.json /app/
WORKDIR /app
RUN npm ci --omit=dev

FROM node:24-alpine AS build-environment
COPY umeboshi /app/
COPY --from=development-environment /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:24-alpine
COPY umeboshi/package.json umeboshi/package-lock.json /app/
COPY --from=production-environment /app/node_modules /app/node_modules
COPY --from=build-environment /app/build /app/build
WORKDIR /app
CMD ["npm", "run", "start"]
