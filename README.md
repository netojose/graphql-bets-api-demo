# GraphQL bets API demo

## Install instrunctions

-   Clone this repository
-   Create a file called **.env**, using **.env.example** as template
-   Run `yarn`
-   Create database tables, running `yarn db:migrate`
-   Fill database table (5 demo users), running `yarn db:seed`

### Running in dev mode

-   Runn `yarn dev`
-   Open [http://localhost:5000/api](http://localhost:5000/api) (or in another port, if you changed the port number at .env file)

### Running in production mode

Creating a productin bundle, you're transpiling typescript to javascript, doing this, you are increasing perfonrmance, instead of run _ts-node_ to execute typescript inside node server.

-   Runn `yarn build`
-   Runn `yarn start`

    Playground is disabled in production, you need to use another client to run queries at [http://localhost:5000/api](http://localhost:5000/api)

## Main tools used

-   [Apollo server](https://www.apollographql.com/docs/apollo-server/)
    -   An open-source, spec-compliant GraphQL server
-   [class-validator](https://github.com/typestack/class-validator)
    -   Decorator-based property validation for classes.
-   [dotenv](https://www.npmjs.com/package/dotenv)
    -   A node module that loads environment variables from a .env file into process.env
-   [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
    -   Polyfill for Metadata Reflection API (to make the Decorators works)
-   [Sequelize](https://sequelize.org/)
    -   A Node.js ORM
-   [sqlite3](http://npmjs.com/sqlite3)
    -   Asynchronous, non-blocking SQLite3 bindings for Node.js
-   [type-graphql](https://typegraphql.com/)
    -   Create GraphQL schema and resolvers with TypeScript, using classes and decorators
-   [typedi](https://github.com/typestack/typedi)
    -   Simple yet powerful dependency injection tool for JavaScript and TypeScript.
-   [ESLint](https://eslint.org/)
    -   ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code.
-   [prettier](https://prettier.io/)
    -   An opinionated code formatter
-   [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
    -   Tweaked version of node-dev that uses ts-node under the hood.
-   [TypeScript](https://www.typescriptlang.org/)
    -   An open-source language which builds on JavaScript
