const express = require("express");

const knex = require("../../database");
const { insert } = require("../../database");

const routes = express.Router();

routes.post("/user", async(request, response) => {
    const { name, email } = await request.body;
    const { senha } = await request.headers;
    try {
        const emaildb = await knex("users").where("email", email).first();
        if(emaildb) {
            response.status(400).send({ message: "Este email esta em uso"})
        }
        await knex("users").insert({ name, email, senha })
        response.status(201).send({ message: "Conta criada com sucesso" })
    } catch (error) {
        console.log(error);
    }
});

routes.delete("/delete_evething", async(request, response) => {
    try {
        await knex("users").del("*");
        response.send({ message: "Todos os ususários foram deletados"})
    } catch (error) {
        console.log(error)
    }
});

module.exports = routes;