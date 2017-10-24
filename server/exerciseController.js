const express = require("express");
const recorder = require("./exerciseObject");

const router = express.Router();

router
    .get("/exercises", (req, res) => res.send(recorder.exercises))
    .get("/myExercises", (req, res) => res.send(recorder.myExercises))

module.exports.router = router;