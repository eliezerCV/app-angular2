import {Component} from '@angular/core';
import {GameService} from '../services';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'game-posted',
    templateUrl: 'app/game/showGamePosted.component.html',
    providers: [GameService]
})

export class ShowGamePosted{

    private game:any = {};
    private idGame:any;
    private gameService:GameService;

    constructor(_gameservice: GameService,private _route:ActivatedRoute,private _router:Router){
        this.gameService = _gameservice;
    }

    ngOnInit(){
        this._route.params.subscribe(params =>{
            this.idGame = params['id'];
        });
        this.getGame();
    }
    private getGame(){
        this.gameService.getgameById(this.idGame).subscribe(data => {
            this.game = data;
        },
        error => {});
    }


}