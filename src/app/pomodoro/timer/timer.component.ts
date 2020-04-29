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

  timeLeft: number = 1500;
  pauseLeft: number;
  minutesLeft: number = 25;
  secondsLeft: number = 0;
  workInterval;
  pauseInterval;

  constructor() {}

  ngOnInit(): void {}

  set25() {
    this.timeLeft = 5;
    this.pauseLeft = 10;
    // this.timeLeft = 25 * 60;
  }

  set50() {
    this.timeLeft = 50 * 60;
  }

  onStart(noOfCyc: number) {
    this.noOfCycles = noOfCyc;
    console.log(this.noOfCycles);
    while (this.noOfCycles > 0) {
      this.startTimer();
    }
  }

  startTimer() {
    this.workInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.minutesLeft = Math.floor(this.timeLeft / 60);
        this.secondsLeft = this.timeLeft % 60;
        this.timeLeft--;
      } else {
        //! ????
        //* pause timer
        this.timeLeft = 0;
        clearInterval(this.workInterval);
        this.pauseInterval = setInterval(() => {
          if (this.pauseLeft > 0) {
            this.minutesLeft = Math.floor(this.pauseLeft / 60);
            this.secondsLeft = this.pauseLeft % 60;
            this.pauseLeft--;
          } else {
            //? kad je pauza istekla
            clearInterval(this.pauseInterval);
          }
        }, 1000);
      }
    }, 1000);
  }

  onPause() {
    clearInterval(this.workInterval);
  }
}
