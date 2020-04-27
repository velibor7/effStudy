import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PomodoroComponent } from "./pomodoro/pomodoro.component";
import { ChecklistComponent } from "./pomodoro/checklist/checklist.component";
import { TimerComponent } from "./pomodoro/timer/timer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PomodoroComponent,
    ChecklistComponent,
    TimerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
