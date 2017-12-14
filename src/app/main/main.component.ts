import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from "@angular/http";
import { Recorder, User, Exercise} from '../models/exercise';
import { ExerciseService } from '../models/exercise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  recorder = new Recorder();
  me = new User();

  constructor(private http: Http, public exercise: ExerciseService, private router: Router) { }

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


}
