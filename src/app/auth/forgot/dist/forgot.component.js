"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ForgotComponent = /** @class */ (function () {
    function ForgotComponent() {
    }
    ForgotComponent.prototype.ngOnInit = function () { };
    ForgotComponent = __decorate([
        core_1.Component({
            selector: "app-forgot",
            templateUrl: "./forgot.component.html",
            styleUrls: ["../auth.component.scss"]
        })
    ], ForgotComponent);
    return ForgotComponent;
}());
exports.ForgotComponent = ForgotComponent;
