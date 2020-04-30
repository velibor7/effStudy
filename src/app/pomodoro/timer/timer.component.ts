import { Component, OnInit } from "@angular/core";
// import { resolve } from "dns";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.scss"],
})
export class TimerComponent implements OnInit {
  mode = "work";
  noOfCycles: number = 0;
  workMinutes: number = 0;
  pauseMinutes: number = 0;
  totalHours: number = 0;
  totalMinutes: number = 0;

  buba;
  timeLeft: number = 1500;
  workLeft: number;
  pauseLeft: number;
  minutesLeft: number;
  secondsLeft: number;
  workInterval;
  pauseInterval;

  constructor() {}

  ngOnInit(): void {}

  set25() {
    //this.timeLeft = 5;O//
    //! work minutes are in seconds
    this.workMinutes = 5;
    this.workLeft = 5;
    this.pauseLeft = 10;
    // this.timeLeft = 25 * 60;
  }

  set50() {
    this.timeLeft = 50 * 60;
  }

  /*
    todo:
   * pokrenemo tajmer na workLeft minuta
   * nakon toga pokrenemo tajmer na pauseLeft minuta
   * ponavljamo to dok je nocycLeft veci od 0
   * stavimo tajmer na 00:00
  */

  //! if noOfCyc is 3, timer makes 3second steps
  async onStart(noOfCyc: number) {
    this.noOfCycles = noOfCyc;
    // console.log(this.noOfCycles);
    await this.startWork().then(() => {
      console.log("zuri8");
    });
    console.log("work is finished");
  }

  async startWork() {
    this.workInterval = setInterval(() => {
      this.mode = "work";
      if (this.workLeft > 0) {
        this.minutesLeft = Math.floor(this.workLeft / 60);
        this.secondsLeft = this.workLeft % 60;
        this.workLeft--;
      } else {
        // timer is finished
        console.log("dasas");
        this.workLeft = 0;
        this.minutesLeft = 0;
        this.secondsLeft = 0;
        clearInterval(this.workInterval);
      }
    }, 1000);
    // console.log("kada se ovo izvrsava?!");
  }

  /*
  async startWork() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.workInterval = setInterval(() => {
          this.mode = "work";
          if (this.workLeft > 0) {
            this.minutesLeft = Math.floor(this.workLeft / 60);
            this.secondsLeft = this.workLeft % 60;
            this.workLeft--;
          } else {
            //* pause timer
            this.workLeft = 0;
            this.minutesLeft = 0;
            this.secondsLeft = 0;
            clearInterval(this.workInterval);
          }
        }, 1000);
        //  resolve();
      }, this.workLeft);
      // resolve();
    });
    // console.log("work is finished");
  }

  async startPause() {
    this.pauseInterval = setInterval(() => {
      this.mode = "pause";
      if (this.pauseLeft > 0) {
        this.minutesLeft = Math.floor(this.pauseLeft / 60);
        this.secondsLeft = this.pauseLeft % 60;
        this.pauseLeft--;
      } else {
        //? kad je pauza istekla
        this.pauseLeft = 0;
        this.minutesLeft = 0;
        this.secondsLeft = 0;
        clearInterval(this.pauseInterval);
      }
    }, 1000);
  }
*/
  onPause() {
    clearInterval(this.workInterval);
  }
}
