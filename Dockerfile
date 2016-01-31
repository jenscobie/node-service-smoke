FROM node:4.1.2

ENV ROOT=/opt/smoke

RUN mkdir -p ${ROOT}
WORKDIR ${ROOT}

COPY package.json ${ROOT}/
COPY test ${ROOT}/test
RUN npm install

CMD [ "npm", "test" ]
