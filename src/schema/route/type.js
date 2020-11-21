// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'
// Thought type
const RouteType = new GraphQLObjectType({
  name: 'route',
  description: '...',

  fields: () => ({
    IdRoute: {type: GraphQLInt},
    NameRoute: {type: GraphQLString},
   
  })
})

export default RouteType