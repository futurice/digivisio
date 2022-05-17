# todo lock this when applicable
FROM node:latest as builder 

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

# todo hmm.. ensure lock file is used
RUN yarn install

COPY . .

# todo order? this is not relevant if we want to have a dev image
RUN yarn build

EXPOSE 3000

CMD ["npm", "start"]



# todo add layer with nginx for prod?