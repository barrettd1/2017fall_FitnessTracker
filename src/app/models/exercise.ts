export class Exercise{
    text: string;
    user: string;
}

export class Food{
    name: string;
    calories: string;
    fat: string;
    carbs: string;
    protein: string;
    date: string;
    time: string;
    user: string;
}

export class Goal{
    text:string;
    user: string;
}

export class User{
    name: string = "";
    myExercises: Exercise[] = [];
    foods: Food[] = [];
    goals: Goal[] = [];
}

export class Recorder{
    users: User[] = [new User(), new User()];
    availableExercises: Exercise[] = [];
    exercises: Exercise[] = [];
    foods: Food[] = [];
    goals: Goal[]= [];
}