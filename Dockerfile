FROM node:alpine

# Set the working directory to /wschat
WORKDIR /wschat

# Copy the current directory contents into the container at /wschat
ADD . /wschat

RUN npm install && npm install -g pm2

EXPOSE 5000

CMD pm2 startOrRestart ecosystem.config.js --env development --no-daemon
  # pm2 deploy ecosystem.config.js --env docker --no-demon

