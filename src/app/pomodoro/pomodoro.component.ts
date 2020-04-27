import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pomodoro",
  templateUrl: "./pomodoro.component.html",
  styleUrls: ["./pomodoro.component.sass"],
})
export class PomodoroComponent implements OnInit {
  noOfCycles: number = 0;
  workMinutes: number = 0;
  pauseMinutes: number = 0;
  totalHours: number = 0;
  totalMinutes: number = 0;

  newTaskName: string;

  constructor() {}

  ngOnInit(): void {}

  set25() {
    // set timer values for 25 - 5
  }

  set50() {
    // set timer values for 50 - 10
  }

  onStart() {
    // start the timer
  }

  onPause() {
    // pause the timer
  }

  //! === CHECKLIST ===

  onEditChecklistElem() {}

  onDeleteChecklistElem() {}

  onAddTask() {}
}
