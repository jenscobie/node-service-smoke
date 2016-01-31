FROM node:4.1.2

# Exclude the NPM cache from the image
VOLUME /root/.npm

ENV ROOT=/opt/smoke

RUN mkdir -p ${ROOT}
WORKDIR ${ROOT}

COPY package.json ${ROOT}
COPY test ${ROOT}/test
RUN npm install

CMD [ "npm", "test" ]
