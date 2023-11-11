FROM node:21
WORKDIR /src
COPY . .
RUN yarn install --production 
CMD ["node", "src/app"]
EXPOSE 3000