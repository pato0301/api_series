const db = require('../database/models');
const { Op } = require("sequelize");

module.exports = {
    all: (req,res) => {
        db.Serie.findAll({
            raw:true,
        //     include:[
        //         { association: 'genre' }
        //     ]
        })
        .then(result => {
            res.status(200).json(result)
        })
    },
    serie: (req,res) => {
        db.Serie.findOne({
            raw:true,
            where:{
                title: {
                    [Op.like]: `%${req.params.name}%`
                }
            },
            include:[
                { association: 'genre' }
            ]
        })
        .then(result => {
            res.status(200).json(result)
        })
    },
    createSerie: (req,res) => {
        let newSerie = {
            title: req.body.title,
            release_date: req.body.release_date,
            end_date: req.body.end_date
        }
        db.Serie.create(newSerie)
        .then(result => {
            res.status(200).json(newSerie)
        })
        
    }
}