FROM node:18-alpine
RUN apk add --no-cache inotify-tools
WORKDIR /gamehelperWebApp

COPY package.json .

RUN yarn 

COPY . .

# RUN yarn build

EXPOSE 8080

CMD [ "yarn", "run", "dev" ]
