import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { GoalsComponent } from './goals/goals.component';
import { FoodComponent } from './food/food.component';
import { AboutComponent } from './about/about.component';
import { ExerciseService } from './models/exercise.service';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    IndexComponent,
    ExerciseComponent,
    SignupComponent,
    LoginComponent,
    GoalsComponent,
    FoodComponent,
    AboutComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule,
    RouterModule.forRoot([
      { path: "exercise", component: ExerciseComponent},
      { path: "home", component: IndexComponent},
      { path: "signup", component: SignupComponent},
      { path: "login", component: LoginComponent},
      { path: "about", component: AboutComponent},
      { path: "food", component: FoodComponent},
      { path: "goals", component: GoalsComponent},
      { path: "main", component: MainComponent},
      { path: "", pathMatch: "full", redirectTo: "/home"}
    ])
  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
