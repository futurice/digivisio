# todo lock this when applicable
FROM node:lts-alpine@sha256:1a9a71ea86aad332aa7740316d4111ee1bd4e890df47d3b5eff3e5bded3b3d10 AS builder 
WORKDIR /app

COPY package.json yarn.lock ./

# todo hmm.. ensure lock file is used
RUN yarn install --frozen-lockfile

COPY . .

# todo order? this is not relevant if we want to have a dev image
RUN yarn build

EXPOSE 3000

CMD ["npm", "start"]


FROM nginx:alpine as prod
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
