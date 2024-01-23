FROM node as builder

WORKDIR /usr/src/app

COPY app/ .

FROM node:alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .
