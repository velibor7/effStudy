import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PomodoroComponent } from "./pomodoro/pomodoro.component";
import { ChecklistComponent } from "./pomodoro/checklist/checklist.component";
import { TimerComponent } from "./pomodoro/timer/timer.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ForgotComponent } from "./auth/forgot/forgot.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PomodoroComponent,
    ChecklistComponent,
    TimerComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
