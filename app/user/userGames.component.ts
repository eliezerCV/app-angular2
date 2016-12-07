import {Component} from '@angular/core';
import {GameService} from '../services';

@Component({
    selector: 'user-game',
    templateUrl: 'app/user/userGames.component.html',
    providers:[GameService]
})

export class UserGameComponent{
    

    private gameService: GameService;
    private games:Array<any>;
    private user:any;

    constructor(_gameService:GameService){
        this.gameService = _gameService;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(){
        this.getGamesByUser();
    }

    private getGamesByUser(){
        this.gameService.getGameByUserName(this.user.name).subscribe(data => {
            this.games = data;
        },
        error =>{});
    }
}