// Imports
import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

// App Imports
import RouteType from '../type'
import {getAll} from '../resolvers'

// Thoughts All
export const routes = {
  type: new GraphQLList(RouteType),
  resolve: getAll
}

