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

  timeLeft: number = 91;
  minutesLeft: number;
  secondsLeft: number;
  interval;

  constructor() {}

  ngOnInit(): void {}

  set25() {
    // set timer values for 25 - 5
  }

  set50() {
    // set timer values for 50 - 10
  }

  onStart() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.minutesLeft = Math.floor(this.timeLeft / 60);
        this.secondsLeft = this.timeLeft % 60;
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }

  onPause() {
    clearInterval(this.interval);
  }
}
