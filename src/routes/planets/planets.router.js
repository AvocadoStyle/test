const express = require('express');

const {
    getAllPlanets,
    getPlanet
} = require('./planets.controller')


const planetsRouter = express.Router()

planetsRouter.get('/planets', getAllPlanets)

module.exports = planetsRouter