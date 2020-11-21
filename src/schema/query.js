// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as route from './route/fields/query';


// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: '...',

  fields: () => ({
    ...route,
  })
})

export default query