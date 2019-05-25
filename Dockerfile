FROM node

# Create app directory
WORKDIR /usr/src/api

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle api source
COPY . .

EXPOSE 4000
CMD ["npm", "start"]