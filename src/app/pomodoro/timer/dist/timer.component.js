"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
        this.noOfCycles = 0;
        this.workMinutes = 0;
        this.pauseMinutes = 0;
        this.totalHours = 0;
        this.totalMinutes = 0;
        this.timeLeft = 91;
    }
    TimerComponent.prototype.ngOnInit = function () { };
    TimerComponent.prototype.set25 = function () {
        // set timer values for 25 - 5
    };
    TimerComponent.prototype.set50 = function () {
        // set timer values for 50 - 10
    };
    TimerComponent.prototype.onStart = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.timeLeft > 0) {
                _this.minutesLeft = Math.floor(_this.timeLeft / 60);
                _this.secondsLeft = _this.timeLeft % 60;
                _this.timeLeft--;
            }
            else {
                _this.timeLeft = 60;
            }
        }, 1000);
    };
    TimerComponent.prototype.onPause = function () {
        clearInterval(this.interval);
    };
    TimerComponent = __decorate([
        core_1.Component({
            selector: "app-timer",
            templateUrl: "./timer.component.html",
            styleUrls: ["./timer.component.scss"]
        })
    ], TimerComponent);
    return TimerComponent;
}());
exports.TimerComponent = TimerComponent;
