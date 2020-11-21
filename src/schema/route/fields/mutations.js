// Imports
import {GraphQLString, GraphQLInt, GraphQLFloat} from 'graphql'

// App Imports
import RouteType from '../type'
import {create, remove} from '../resolvers'

// Thought create
export const RouteCreate = {
  type: RouteType,
  args: {
    NameRoute: {
      name: 'NameRoute',
      type: GraphQLString
    },
  },
  resolve: create
}

// Thought remove
export const RouteRemove = {
  type: RouteType,
  args: {
    IdRoute: {
      name: 'IdRoute',
      type: GraphQLInt
    }
  },
  resolve: remove
}