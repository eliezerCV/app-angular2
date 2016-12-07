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
var services_1 = require('../services');
var GameContainerComponent = (function () {
    function GameContainerComponent(_gameService) {
        this.onClickedGame = new core_1.EventEmitter();
        this.gameService = _gameService;
    }
    GameContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getGames().subscribe(function (data) {
            _this.games = data;
        }, function (error) { });
    };
    GameContainerComponent.prototype.ClickedGame = function (id) {
        this.onClickedGame.emit(id);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GameContainerComponent.prototype, "onClickedGame", void 0);
    GameContainerComponent = __decorate([
        core_1.Component({
            selector: 'game-container',
            templateUrl: 'app/game/gameContainer.component.html',
            providers: [services_1.GameService]
        }), 
        __metadata('design:paramtypes', [services_1.GameService])
    ], GameContainerComponent);
    return GameContainerComponent;
}());
exports.GameContainerComponent = GameContainerComponent;
//# sourceMappingURL=gameContainer.component.js.map