# NAB - Ecommerce MVP

## Components/infrastructure
### System overview
![System component](./assets/images/architecture.png)
### Components

- **Product service**: serve and storage bussiness related to product.
- **Activity service**: listen **user activity** and persist to database, also serve API for marketing, analyzing.
## Database design

## Principles / Design patterns

## Code structure

Structure for both services:
```javascript
├── Dockerfile // packaging service
├── .dockerignore
├── .env.development // environment variables
├── .eslintrc.json // linter config
├── .gitignore // gitignore
├── package.json
├── src
│   ├── config // read config from .env and storage for apps
│   ├── controllers // config routes && register controllers for each routes
│   ├── index.js // entry point for apps
│   ├── middlewares
│   ├── queue
│   ├── schemas // 
│   ├── services
│   └── utils
├── tests
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
## Framworks
- [Koa](https://koajs.com/)
- [Sequelize](https://sequelize.org/) as MySQL ORM.
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
