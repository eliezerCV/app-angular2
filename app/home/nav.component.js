"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var services_1 = require('../services');
var NavComponent = (function () {
    function NavComponent(_router, _gameservice) {
        this.loaded = false;
        this.user = {};
        this.router = _router;
        this.loaded = true;
        this.gameService = _gameservice;
    }
    NavComponent.prototype.getIdGame = function (id) {
        this.idRoute = id;
        console.log(this.idRoute);
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            templateUrl: 'app/home/nav.component.html',
            styleUrls: ['app/home/menu.css'],
            providers: [services_1.GameService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, services_1.GameService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map