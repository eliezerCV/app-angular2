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
var SUDComponent = (function () {
    function SUDComponent(_router) {
        this._router = _router;
        this.user = {};
        this.user = null;
    }
    SUDComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser')) {
            //obtenemos los datos del usuario en sesion
            this.user = JSON.parse(localStorage.getItem('currentUser'));
            console.log(this.user.name);
        }
    };
    SUDComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.user = null;
        this._router.navigateByUrl('/home');
    };
    SUDComponent = __decorate([
        core_1.Component({
            selector: 'sud',
            templateUrl: 'app/home/sud.component.html',
            styleUrls: ['app/home/menu.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SUDComponent);
    return SUDComponent;
}());
exports.SUDComponent = SUDComponent;
//# sourceMappingURL=sud.component.js.map