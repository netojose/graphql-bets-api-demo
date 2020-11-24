import { config } from 'dotenv';
config();

import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import { Container } from 'typedi';
import express from 'express';

import { connect } from './utils/connection';

(async (): Promise<void> => {
    await connect();

    const schema: GraphQLSchema = await buildSchema({
        resolvers: [`${__dirname}/resolvers/*.{ts,js}`],
        container: Container
    });

    const { APP_PORT } = process.env;
    const apolloServer = new ApolloServer({ schema });
    const app = express();
    apolloServer.applyMiddleware({ app, path: '/api' });
    const port = APP_PORT || 4000;

    app.listen({ port }, () => console.log(`🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`));
})();
