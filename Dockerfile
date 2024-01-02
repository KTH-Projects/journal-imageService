# Use the base image that suits your application
FROM --platform=$BUILDPLATFORM node:lts AS development

WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json

RUN npm ci
COPY . /code

# Expose the port your application runs on
EXPOSE 3000 

ENV CI=true

CMD [ "npm", "start" ]
