# NAB - Ecommerce MVP

## Components/infrastructure
### Architecture design
![System component](./assets/images/architecture.png)
### Components

- Product service: storage and serve API related to product.
- Activity service: listen user activity and persist to database.
## Workflow

## Database design

## Principles / Design patterns

## Code structure
### product service.
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

## Test api with CURL

## Contact
