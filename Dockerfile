FROM node as builder

WORKDIR /usr/src/app

COPY app/ .

FROM node:alpine

USER node

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .
