import { Component, OnInit, ViewEncapsulation, NgModule } from '@angular/core';
import { Http } from "@angular/http";
import { Recorder, User, Food} from '../models/exercise';
import { ExerciseService } from '../models/exercise.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FoodComponent implements OnInit {

  recorder = new Recorder();
  me = new User();

  allowNewFood = false;
  name='';
  calories='';
  fat='';
  carbs='';
  protein='';
  date='';
  time='';
  foodCreated= false;
  editor = false;

  foods= new Array<Food>();

  constructor(private http: Http, public exercise: ExerciseService, private router: Router) {  
    setTimeout(() => {
      this.allowNewFood = true;
    }, 2000);
  }
  
  update(){
    this.http.get(this.exercise.apiRoot +  "/exercise/recorder").subscribe( data => {
        this.recorder = data.json();
    });
  }

  ngOnInit() {
    if(this.exercise.me == null){
      this.router.navigate(['/login']);
    }
    this.me = this.exercise.me;
    setInterval(() => this.update(), 1000)
  }

  onCreateFood(){
    this.foodCreated = true;
  }

  edit(){
    this.editor=true;
  }

  done(){
    this.editor=false;
  }

  delete(){
    
  }

  submitFood(e: MouseEvent, name: String, calories: String, fat: String, carbs: String, protein: String, date: String, time: String){
    e.preventDefault();
    const data = { name: this.name, calories: this.calories, fat:this.fat, carbs: this.carbs, protein:this.protein, date:this.date, time:this.time, user:this.me.name };
    this.http.post(this.exercise.apiRoot + "/exercise/Recorder/foods", data).subscribe(res => {
    });    
  }

}
