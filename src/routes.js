const express = require("express");
const routes = express.Router()

const Joi = require("joi")

const connection = require('./database/connection')

routes.get('/', async (req, res)=> {
    const data = req.body


    const schema = Joi.object({
      nome: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

      idade: Joi.number()
        .integer()
        .required()
    })

    try {
      await schema.validateAsync({ nome: data.nome, idade: data.idade})
      await connection("clips").insert(data)
      res.json({message: "success"}).status(200)

    } catch (err) {
      console.log(err.message)
      res.json({message: err.message}).status(400)
    }

    
     
})

module.exports = routes