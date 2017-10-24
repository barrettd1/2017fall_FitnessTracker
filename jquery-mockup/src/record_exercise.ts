import * as $ from 'jquery';

export class Exercise{
    text: string

    constructor(text:string) {
        this.text = text;
    }
}

/*export class User{
    name: string = "Danyelle Barrett";
    myExercises: Exercise[] = [];

    drawMyExercises(){
        $("#my-exercises").html(
            this.myExercises.map(x => `<li class="list-group-item">${x.text}</li>`).join("")
        )
    }
}
*/

export class Recorder{
    exercises: Exercise[] = [];
    myExercises: Exercise[] = [];

    drawExercises(){
        $("#exercises").html(
            this.exercises.map(x => `<button class="list-group-item" id="cmd-add">${x.text}</button>`).join("")
        )
    }

    drawMyExercises(){
        $("#my-exercises").html(
            this.myExercises.map(x => `<li class="list-group-item">${x.text}</li>`).join("")
        )
    }

    init(){
        return $.when(
            $.getJSON("/recorder/exercises").done( data => {
                this.exercises = data;
            })
        );
    }
}

//Controller
const recorder = new Recorder();
let empty:boolean = true;

recorder.init().done(() => {
    recorder.drawExercises();

    $('.list-group-item').click(function(e) {
        e.preventDefault();
        const workoutName = e.target.textContent;
        if(empty) {
            document.getElementById('default-message').remove();
            empty = false;
        }
        const newExercise = new Exercise(workoutName);
        recorder.myExercises.push(newExercise);
        console.log(recorder.myExercises);
        recorder.drawMyExercises();
    });
});

