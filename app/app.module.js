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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var userLogin_component_1 = require('./user/userLogin.component');
var nav_component_1 = require('./home/nav.component');
var userRegister_component_1 = require('./user/userRegister.component');
var app_routing_1 = require('./app.routing');
var forms_1 = require('@angular/forms');
var sud_component_1 = require('./home/sud.component');
var filter_category_component_1 = require('./home/filter-category.component');
var userProfile_component_1 = require('./user/userProfile.component');
var userAccount_component_1 = require('./user/userAccount.component');
var userGames_component_1 = require('./user/userGames.component');
var gameContainer_component_1 = require('./game/gameContainer.component');
var gamePost_component_1 = require('./game/gamePost.component');
var showGamePosted_component_1 = require('./game/showGamePosted.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_1.Routing, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, nav_component_1.NavComponent, userLogin_component_1.UserLoginComponent, userRegister_component_1.UserRegisterComponent,
                sud_component_1.SUDComponent, filter_category_component_1.FilterCategoryComponent, userProfile_component_1.UserProfileComponent, userAccount_component_1.UserAccountComponent,
                userGames_component_1.UserGameComponent, gameContainer_component_1.GameContainerComponent, gamePost_component_1.GamePostComponent, showGamePosted_component_1.ShowGamePosted],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map