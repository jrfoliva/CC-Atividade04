FROM mysql:8.0-debian
ENV NODE_ENV development
USER root
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y nodejs npm
RUN apt-get update && apt-get upgrade -y
RUN mkdir -p /usr/src/app/node_modules
RUN mkdir -p /usr/src/app/tmp
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]