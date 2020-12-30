# NAB - Ecommerce MVP

## Components/infrastructure
### System overview
![System component](./assets/images/architecture.png)
### Components

- **Product service**: storage and serve API related to product.
- **Activity service**: listening user activity from Product Service and persist to database.
## Database design

## Principles / Design patterns

## Code structure
### Product service
```javascript
.
├── Dockerfile
├── .dockerignore
├── .env.development
├── .eslintrc.json
├── .gitignore
├── package.json
├── src
│   ├── config
│   │   └── index.js
│   ├── controllers
│   │   ├── index.js
│   │   ├── product.js
│   │   └── user.js
│   ├── index.js
│   ├── middlewares
│   │   └── caughtException.js
│   ├── queue
│   │   ├── index.js
│   │   └── rabbitmq
│   │       └── index.js
│   ├── schemas
│   │   ├── index.js
│   │   ├── product.js
│   │   └── user.js
│   ├── services
│   │   └── product.js
│   └── utils
│       ├── analysisRequest.js
│       └── validation.js
├── tests
│   ├── index.test.js
│   └── utils
│       └── validate.test.js
└── wait-for-it.sh

```


### activity service
```javascript
.
├── Dockerfile
├── .dockerignore
├── .env.development
├── .eslintrc.json
├── .gitignore
├── package.json
├── src
│   ├── config
│   │   └── index.js
│   ├── controllers
│   │   └── index.js
│   ├── handlers
│   │   ├── index.js
│   │   └── userActivity.js
│   ├── index.js
│   ├── middlewares
│   │   └── caughtException.js
│   ├── queue
│   │   ├── index.js
│   │   └── rabbitmq
│   │       └── index.js
│   ├── schemas
│   │   └── userActivity.js
│   ├── services
│   │   └── userActivity.js
│   └── utils
│       ├── analysisRequest.js
│       └── validation.js
└── tests
    ├── index.test.js
    └── utils
        └── validate.test.js

```
## Framework
- [KoaJS](https://koajs.com/)
- [Sequelize ORM](https://sequelize.org/)
- [Mongoose](https://mongoosejs.com/)
- [AMQPLib](https://www.npmjs.com/package/amqplib)

## How to run in local
### with docker-compose 
> cp .env.example .env #first create .env file
> 
> docker-compose up --env-file=.env up #determine .env file for docker-compose use to load
### without docker-compose

## Test api with CURL
```
curl --location --request POST 'localhost:3000/product/search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "page_size": 10,
    "page_number": 1,
    "filter": [
        "id",
        "name",
        "color",
        "brand",
        "price"
    ],
    "sort": {
        "price": "asc"
    },
    "search": {
        "name": "Iphone 12"
    }
}'
```
## Contact
