FROM node:16

# RUN ["apt-get", "update"]
# RUN ["apt-get", "-y", "install", "vim"]

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm","start" ]
