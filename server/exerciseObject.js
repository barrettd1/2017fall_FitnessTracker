const exercises = require("./exercises") 

let iCurrentExercise=0;

const exercise = {
    availableExercises: exercises,
    getNextExercise:() => exercise.availableExercises[(iCurrentExercise = (iCurrentExercise + 1) % exercise.availableExercises.length)],
    user: {
        myExercises: [],
        goals:[],
        foods:[]
    },
    recorder:{
        users:[],
        availableExercises: exercises,
        exercises:[{text:"Baseball", user:"Derek Jeter"}],
        goals:[],
        foods:[]
   }
        
}

module.exports = exercise;