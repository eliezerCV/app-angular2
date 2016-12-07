"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var userLogin_component_1 = require('./user/userLogin.component');
var userRegister_component_1 = require('./user/userRegister.component');
var userProfile_component_1 = require('./user/userProfile.component');
var userAccount_component_1 = require('./user/userAccount.component');
var userGames_component_1 = require('./user/userGames.component');
var gameContainer_component_1 = require('./game/gameContainer.component');
var gamePost_component_1 = require('./game/gamePost.component');
var showGamePosted_component_1 = require('./game/showGamePosted.component');
var appRoutes = [
    { path: 'home', component: app_component_1.AppComponent },
    { path: 'userLogin', component: userLogin_component_1.UserLoginComponent },
    { path: 'userRegister', component: userRegister_component_1.UserRegisterComponent },
    { path: 'userProfile', component: userProfile_component_1.UserProfileComponent },
    { path: 'userAccount', component: userAccount_component_1.UserAccountComponent },
    { path: 'userGames', component: userGames_component_1.UserGameComponent },
    { path: 'gameContainer', component: gameContainer_component_1.GameContainerComponent },
    { path: 'gamePost', component: gamePost_component_1.GamePostComponent },
    { path: 'gamePosted/:id', component: showGamePosted_component_1.ShowGamePosted },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map