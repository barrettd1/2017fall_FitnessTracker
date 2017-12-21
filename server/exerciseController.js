const express = require("express");
const exercise = require("./exerciseObject");

const router = express.Router();

router
    .get("/availableExercises", (req, res) => res.send( Array(7).fill().map( () => exercise.getNextExercise() ) ) )
    .get("/exercises", (req, res) => res.send(exercise.exercises))
    .get("/user", (req, res) => res.send(exercise.user))
    .get("/recorder", (req, res) => res.send(exercise.recorder))
    .post("/recorder/users", (req, res) => {
        //if user enters correct password, create and add them
        if(req.body.password == "password"){
            //check to see if player is already logged in
            let use = exercise.recorder.users.find(x=> x.fbid == req.body.fbid);
            //if no player
            if(!use){
                use = { name: req.body.name, fbid: req.body.fbid, picture: req.body.picture };
                exercise.recorder.users.push(use);
            }
            res.status(201).send(use);
        }
        //else return status of incorrect password, 403 is forbidden
        else{
            res.status(403).send("Invalid Password");
        }
        
    })
    .post("/recorder/availableExercises", (req, res) => {
        exercise.recorder.availableExercises.push(req.body);
        res.status(201).send(exercise.getNextExercise());
    })
    .post("/recorder/exercises", (req, res) => {
        exercise.recorder.exercises.push(req.body);
    })
    .post("/recorder/goals", (req, res) => {
        exercise.recorder.goals.push(req.body);
    })
    .post("/recorder/foods", (req, res) => {
        exercise.recorder.foods.push(req.body);
    })
    .post("/recorder/deletede", (req, res) => {
        exercise.recorder.deletede.push(req.body);
        exercise.recorder.exercises=[];
    })
    .post("/recorder/deletedf", (req, res) => {
        exercise.recorder.deletedf.push(req.body);
        exercise.recorder.foods=[];
    })
    .post("/recorder/deletedg", (req, res) => {
        exercise.recorder.deletedg.push(req.body);
        exercise.recorder.goals=[];
    })

module.exports.router = router;