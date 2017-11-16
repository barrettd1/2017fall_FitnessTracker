import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Exercise, User, Recorder} from '../models/exercise';

import * as $ from 'jquery';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExerciseComponent implements OnInit {

  apiRoot = "//localhost:3001"
  
      recorder = new Recorder();
      me = new User();
  
      constructor() { }
  
      ngOnInit() {
          setInterval(() => this.update(), 1000)
          $.getJSON(this.apiRoot+ "/exercise/exercises").done( data => {
            this.recorder.exercises = data;
          })
      }

      update(){}
  
      submitExercise(e: MouseEvent, exercise: Exercise, i: number){
          e.preventDefault();
          const data = { text: exercise.text };
          $.post(this.apiRoot + "/exercise/recorder/exercises", data);
          this.me.exercises.splice(i, 1);
      }
  

}
