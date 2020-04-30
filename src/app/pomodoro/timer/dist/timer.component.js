"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
// import { resolve } from "dns";
var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
        this.mode = "work";
        this.noOfCycles = 0;
        this.workMinutes = 0;
        this.pauseMinutes = 0;
        this.totalHours = 0;
        this.totalMinutes = 0;
        this.timeLeft = 1500;
    }
    TimerComponent.prototype.ngOnInit = function () { };
    TimerComponent.prototype.set25 = function () {
        //this.timeLeft = 5;O//
        //! work minutes are in seconds
        this.workMinutes = 5;
        this.workLeft = 5;
        this.pauseLeft = 10;
        // this.timeLeft = 25 * 60;
    };
    TimerComponent.prototype.set50 = function () {
        this.timeLeft = 50 * 60;
    };
    /*
      todo:
     * pokrenemo tajmer na workLeft minuta
     * nakon toga pokrenemo tajmer na pauseLeft minuta
     * ponavljamo to dok je nocycLeft veci od 0
     * stavimo tajmer na 00:00
    */
    //! if noOfCyc is 3, timer makes 3second steps
    TimerComponent.prototype.onStart = function (noOfCyc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.noOfCycles = noOfCyc;
                        // console.log(this.noOfCycles);
                        return [4 /*yield*/, this.startWork().then(function () {
                                console.log("zuri8");
                            })];
                    case 1:
                        // console.log(this.noOfCycles);
                        _a.sent();
                        console.log("work is finished");
                        return [2 /*return*/];
                }
            });
        });
    };
    TimerComponent.prototype.startWork = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.workInterval = setInterval(function () {
                    _this.mode = "work";
                    if (_this.workLeft > 0) {
                        _this.minutesLeft = Math.floor(_this.workLeft / 60);
                        _this.secondsLeft = _this.workLeft % 60;
                        _this.workLeft--;
                    }
                    else {
                        // timer is finished
                        console.log("dasas");
                        _this.workLeft = 0;
                        _this.minutesLeft = 0;
                        _this.secondsLeft = 0;
                        clearInterval(_this.workInterval);
                    }
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
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
