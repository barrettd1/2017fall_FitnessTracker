import * as $ from 'jquery';

export class Exercise{
    text: string
}

export class User{
    name: string = "Danyelle Barrett";
    myExercises: Exercise[] = [];

    drawMyExercises(){
        $("#my-exercises").html(
            this.myExercises.map(x => `<li class="list-group-item">${x.text}</li>`).join("")
        )
    }
}

export class Page{
    member: User;
    exercises: Exercise[] = [];
    myExercises: Exercise[] = [];

    drawExercises(){
        $("#exercises").html(
            this.exercises.map(x => `<li class="list-group-item">${x.text}</li>`).join("")
        )
    }

    drawMyExercises(){
        $("#my-exercises").html(
            this.myExercises.map(x => `<li class="list-group-item">${x.text}</li>`).join("")
        )
    }
}

export class Game{
    member: User;
    exercises: Exercise[] = [
        { text: "Jog"},
        { text: "Lift Weights"},
        { text: "Eliptical"},
        { text: "Bicycle"},
        { text: "Push Ups"},
        { text: "Yoga"},
        { text: "Aerobics Class"},
        { text: "Swimming"},
        { text: "Sports Game"},
        { text: "Hiking"}
    ];
}

//Controller

const game = new Game();
const page = new Page();
const me = new User();

let i = 0;
page.exercises = game.exercises;
page.drawExercises();
page.drawMyExercises();

me.myExercises = game.exercises;
me.drawMyExercises();

