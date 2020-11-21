
export default (sequelize, DataTypes) => {
    let Route =  sequelize.define('Route', {
        IdRoute: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            defaultValue: null,
            field: 'IdRoute'
        },
        NameRoute: {
            type: DataTypes.TEXT,
            field: 'NameRoute'
        },
       
        },
        {
        timestamps: false,
        freezeTableName: true,
        // define the table's name
        tableName: 'bus_route',
        }
        );

        
        
       
        return Route;
  }