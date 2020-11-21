// Imports
import graphqlHTTP from 'express-graphql'

// App Imports
import config from '../config/config.json'
import schema from '../schema'
import { buildSchema, execute, subscribe } from 'graphql';

// Pull in some specific Apollo packages:
import { PubSub } from 'graphql-subscriptions';
import { SubscriptionServer } from 'subscriptions-transport-ws';

export default function (server) {
  //console.info('SETUP - GraphQL...')

  // API (GraphQL on route `/api`)
  server.use(config.graphqlEndpoint, graphqlHTTP(() => ({
    schema,
    graphiql: config.graphql.ide,
    pretty: config.graphql.pretty
  })))
  
  SubscriptionServer.create({ schema, execute, subscribe }, {
          server // Listens for 'upgrade' websocket events on the raw server
  });



}