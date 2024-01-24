FROM node:20.11.0 AS builder

WORKDIR /usr/src/app

COPY app/ .

FROM node:alpine

USER node

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .
