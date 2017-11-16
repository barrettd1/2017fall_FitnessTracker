export class Exercise{
    text: string
}

export class User{
    name: string = "Danyelle Barrett";
    exercises: Exercise[] = [];
}

export class Recorder{
    exercises: Exercise[] = [];
    myExercises: Exercise[] = [];
}