module.exports = (sequelize, DataTypes) => {

    const alias = "Genre"

    const cols = {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        name: {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
        ranking: {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        active: {
            type : DataTypes.INTEGER,
            allowNull : false,
        }
        }

    const config = {
            tableName : "genres",
            timestamp : true,
            underscored : true,
        }

    const Genre = sequelize.define(alias,cols,config)

    // Serie.associate = function(models) {
    //     Serie.belongsTo(models.Genre, {
    //         as: 'genre',
    //         foreignKey:"genre_id",
    //         // targetKey: "idproducto",
    //     })
    // }

    return Genre
}