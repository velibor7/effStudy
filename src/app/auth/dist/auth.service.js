"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs_1.Subject();
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.createUser = function (username, email, password) {
        var userData = {
            username: username,
            email: email,
            password: password
        };
        this.http
            .post("http://localhost:3000/api/user/register", userData)
            .subscribe(function (response) {
            console.log(response);
        });
        this.router.navigate(["/"]);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var authData = { username: username, password: password };
        this.http
            .post("http://localhost:3000/api/user/login", authData)
            .subscribe(function (response) {
            var token = response.token;
            _this.token = token;
            if (token) {
                var expiresInDuration = response.expiresIn;
                _this.setAuthTimer(expiresInDuration);
                _this.isAuthenticated = true;
                _this.authStatusListener.next(true);
                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);
                _this.saveAuthData(token, expirationDate);
                _this.router.navigate(["/"]);
            }
        });
    };
    AuthService.prototype.autoAuthUser = function () {
        var authInfo = this.getAuthData();
        if (!authInfo) {
            return;
        }
        var now = new Date();
        var expiresIn = authInfo.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInfo.token;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        console.log("Setting timer: " + duration);
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    AuthService.prototype.saveAuthData = function (token, expirationDate) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
    };
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem("token");
        var expirationDate = localStorage.getItem("expiration");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate)
        };
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        console.log("token cleared!");
        console.log("u r logged out!");
        this.router.navigate(["/"]);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
