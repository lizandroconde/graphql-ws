// App Imports
import models from '../../models'

// Get thoughts by ID
export async function getAll(parentValue) {
  return await models.Route.findAll()
}


// Get all idioma y todo 

// Create thought
export async function create(parentValue, { NameRoute }) {
  return await models.Route.create({NameRoute })
}

// Delete thought
export async function remove(parentValue, {IdRoute}) {
  return await models.Route.destroy({ where: { IdRoute } })
}
