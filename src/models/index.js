// Imports
import Sequelize from 'sequelize';



// App Imports
import databaseConnection from '../setup/databaseConnection'

let models = {
	Route: databaseConnection.import('./Route'),
	
};



Object.keys(models).forEach(key =>{
	if (models[key].hasOwnProperty('associate')){
		models[key].associate(models);
	}
});


models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
