const express = require("express");
const game = require("./exerciseObject");

const router = express.Router();

router
    .get("/exercises", (req, res) => res.send(game.exercises))
    .get("/myExercises", (req, res) => res.send(game.myExercises))

module.exports.router = router;