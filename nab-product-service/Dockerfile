FROM node:14.15.3-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
COPY wait-for-it.sh ./
EXPOSE 3000
CMD ["./wait-for-it"]
CMD ["node", "src/index.js"]