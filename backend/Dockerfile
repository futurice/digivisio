FROM node:latest as base

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY tsconfig.json ./
COPY jest.config.ts ./
COPY tsoa.json ./
COPY src ./src
COPY .env.production ./.env
COPY setTestEnvVars.js ./
COPY .eslintrc.json ./

FROM base as devtest

# these are here for running e2e tests with headless chrome in puppeteer
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get -y install ca-certificates fonts-liberation libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils 

RUN npm run build

EXPOSE 3001

RUN chmod -R o+rwx node_modules/puppeteer/.local-chromium

CMD [ "node", "./dist/index.js"]


FROM node:18-alpine as prod
WORKDIR /app
ENV NODE_ENV production

COPY --from=base /app .
RUN npm run build

EXPOSE 3001
USER node
CMD [ "node", "./dist/index.js"]
