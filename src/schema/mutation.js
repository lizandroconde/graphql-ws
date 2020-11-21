// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as route from './route/fields/mutations';


// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
    ...route,   
  }
})

export default mutation
