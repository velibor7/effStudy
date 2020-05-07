"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
// import { resolve } from "dns";
var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
        this.secondsLeft = 0;
        this.minutesLeft = 0;
        this.workLeft = 0;
    }
    TimerComponent.prototype.ngOnInit = function () { };
    TimerComponent.prototype.set25 = function () {
        // this.workLeft = 25 * 60;
        this.minutesLeft = 25;
        this.workLeft = 5;
    };
    TimerComponent.prototype.set50 = function () {
        // this.workLeft = 50 * 60;
        this.minutesLeft = 50;
        this.workLeft = 10;
    };
    TimerComponent.prototype.onStart = function () {
        var _this = this;
        this.workInterval = setInterval(function () {
            if (_this.workLeft >= 0) {
                _this.minutesLeft = Math.floor(_this.workLeft / 60);
                _this.secondsLeft = _this.workLeft % 60;
                _this.workLeft--;
            }
            else {
                _this.onPause();
            }
        }, 1000);
    };
    TimerComponent.prototype.onPause = function () {
        clearInterval(this.workInterval);
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
