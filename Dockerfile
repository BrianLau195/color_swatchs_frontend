FROM node:22.11.0

# Set working directory to /myapp 
WORKDIR /myapp

# Copy package.json to /myapp
COPY package*.json .

# copy dependencies . . means all files in current directory with node_modules and other files
COPY . .


# run npm install to install dependencies
RUN npm install

# expose port 4000
EXPOSE 4000


# npm run start to run the app
CMD [ "npm","run","start" ]