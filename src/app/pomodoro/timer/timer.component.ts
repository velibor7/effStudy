import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.scss"],
})
export class TimerComponent implements OnInit {
  noOfCycles: number = 0;
  workMinutes: number = 0;
  pauseMinutes: number = 0;
  totalHours: number = 0;
  totalMinutes: number = 0;

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
}
