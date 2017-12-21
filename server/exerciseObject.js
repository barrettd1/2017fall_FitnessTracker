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
        goals:[{text:"Jog for 20 min every day", user:"Eli Manning"}],
        foods:[{name:"Apple", 
                calories: "10", 
                fat: "3", 
                carbs: "15", 
                protein: "10", 
                date: "12/19/17", 
                time: "12:15", 
                user: "Rachael Ray"}],
        deletede:[],
        deletedf:[],
        deletedg:[]
   }
        
}

module.exports = exercise;