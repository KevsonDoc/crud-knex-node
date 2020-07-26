const express = require("express");

const knex = require("../../database");

const routes = express.Router();

routes.post("/user", async(request, response) => {
    const { name, email, senha } = await request.body;
    try {
        await knex("users").insert({ name, email, senha })
    } catch (error) {
        console.log(error);
    }
    response.send({ name, email, senha });
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