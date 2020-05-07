import { Component, OnInit } from "@angular/core";
// import { resolve } from "dns";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.scss"],
})
export class TimerComponent implements OnInit {
  secondsLeft: number = 0;
  minutesLeft: number = 0;
  workLeft: number = 0;
  workInterval;
  constructor() {}

  ngOnInit(): void {}

  set25() {
    this.workLeft = 1500; // 25 * 60 seconds
    this.minutesLeft = 25;
    this.secondsLeft = 0;
    // this.workLeft = 5;
  }

  set50() {
    this.workLeft = 3000; // 50 * 60
    this.minutesLeft = 50;
    this.secondsLeft = 0;
    // this.workLeft = 10;
  }

  onStart() {
    this.workInterval = setInterval(() => {
      if (this.workLeft >= 0) {
        this.minutesLeft = Math.floor(this.workLeft / 60);
        this.secondsLeft = this.workLeft % 60;
        this.workLeft--;
      } else {
        this.onPause();
      }
    }, 1000);
  }

  onPause() {
    clearInterval(this.workInterval);
  }
}
