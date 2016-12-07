import {Component, EventEmitter, Output} from '@angular/core';
import {GameService} from '../services';

@Component({
    selector: 'game-container',
    templateUrl: 'app/game/gameContainer.component.html',
    providers: [GameService]
})

export class GameContainerComponent{

    private gameService: GameService;
    private games:Array<any>;

    constructor(_gameService: GameService){
        this.gameService = _gameService;
    }

    ngOnInit(){
        this.gameService.getGames().subscribe(data => {
            this.games = data;
        },
        error =>{});
    }
    @Output() onClickedGame:EventEmitter<string> = new EventEmitter();

    ClickedGame(id){
        this.onClickedGame.emit(id);
    }
}