FROM node:latest as base

COPY package*.json ./
COPY tsconfig.json ./
COPY jest.config.ts ./

RUN npm ci

COPY src ./src


# hmm.. do i want separate layers for test and prod and dev, or just have a common layer and run commands... decisions, decisions...

# FROM base as test
# CMD [ "npm", "run", "test" ]


FROM base as prod

RUN npm run build

EXPOSE 3001

CMD [ "node", "./dist/index.js"]