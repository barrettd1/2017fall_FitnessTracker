import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from "@angular/http";
import { Recorder, User, Food} from '../models/exercise';
import { ExerciseService } from '../models/exercise.service';
import { Router } from '@angular/router';

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
  foodName='';
  calories='';
  fat='';
  carbs='';
  protein='';
  date='';
  time='';
  foodCreated= false;
  editor = false;

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

  //not used anymore
  onAddFood(event: any){
      this.foodName = event.target.value;
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

  submitFood(e: MouseEvent, food: Food, i: number){
    e.preventDefault();
    const data = { text: food };
    this.http.post(this.exercise.apiRoot + "/exercise/Recorder/foods", data).subscribe(res => {
    });    
}
}
