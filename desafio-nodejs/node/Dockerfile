FROM node:alpine
WORKDIR /node

RUN apk update && \
    apk add netcat-openbsd && \
    npm install mysql2 && \
    npm install express

COPY hello.js wait-for ./
RUN chmod +x wait-for