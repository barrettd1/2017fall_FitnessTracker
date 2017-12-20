import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from "@angular/http";
import { Recorder, User, Goal} from '../models/exercise';
import { ExerciseService } from '../models/exercise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GoalsComponent implements OnInit {

  recorder = new Recorder();
  me = new User();

  goal="";
  goals=["goal1", "goal2"];
  goalCreated=false;
  allowNewGoal=false;
  editor = false;
  create=false;

  constructor(private http: Http, public exercise: ExerciseService, private router: Router) {
    setTimeout(() => {
      this.allowNewGoal = true;
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

  submitGoal(e: MouseEvent, goal: string){
      this.goalCreated = true;
      this.create=false;
      e.preventDefault();
      const data = { text: goal, user: this.me.name };
      this.http.post(this.exercise.apiRoot + "/exercise/recorder/goals", data).subscribe(res => {
      });    
  }

  deleteGoal(goal:string){
    for(let i =0; i < this.goals.length; i++){
      if(this.goals[i] == goal){
        this.goals.splice(i,1);
      }
    }
  }

  edit(){
    this.editor=true;
  }

  done(){
    this.editor=false;
  }

  createGoal(){
    this.create=true;
  }

}
