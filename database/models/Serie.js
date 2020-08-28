module.exports = (sequelize, DataTypes) => {

    const alias = "Serie"

    const cols = {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        title: {
            type : DataTypes.STRING(500),
            allowNull : false,
        },
        release_date: {
            type : DataTypes.DATE(80),
            allowNull : false,
        },
        end_date: {
            type : DataTypes.DATE(45),
            allowNull : false,
        }
        }

    const config = {
            tableName : "series",
            timestamp : true,
            underscored : true,
        }

    const Serie = sequelize.define(alias,cols,config)

    Serie.associate = function(models) {
        Serie.belongsTo(models.Genre, {
            as: 'genre',
            foreignKey:"genre_id",
            // targetKey: "idproducto",
        })
    }

    return Serie
}