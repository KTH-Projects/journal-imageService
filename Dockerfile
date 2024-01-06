# Use the base image that suits your application
FROM --platform=$BUILDPLATFORM node:lts AS development

WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json

RUN npm ci
COPY . /code

ENV REACT_APP_MYSQL_IP=130.237.11.66
ENV REACT_APP_MYSQL_PORT=2526
ENV REACT_APP_MYSQL_ROOT_PASSWORD=password
ENV REACT_APP_MYSQL_USER=root
ENV REACT_APP_MYSQL_DATABASE=imageDB


# Expose the port your application runs on
EXPOSE 8082 

ENV CI=true

CMD [ "npm", "start" ]
