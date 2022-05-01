FROM node:10
WORKDIR /usr/src
COPY package*.json ./
COPY . .
EXPOSE 3123
CMD ["npm", "run", "dev"]