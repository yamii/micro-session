FROM node:0.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN pwd

COPY . /usr/src/app/

RUN npm install

RUN npm install -g nodemon

CMD nodemon .
