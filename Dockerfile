FROM node:4.1.2

ENV ROOT=/opt/smoke

RUN mkdir -p ${ROOT}
COPY package.json ${ROOT}

WORKDIR ${ROOT}
RUN npm install

CMD [ "npm", "test", "http://0.0.0.0:3000" ]
