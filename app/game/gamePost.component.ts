import {Component} from '@angular/core';
import {GameService} from '../services';
import {Router} from '@angular/router';

@Component({
    selector:'game-post',
    templateUrl:'app/game/gamePost.component.html',
    providers:[GameService]
})

export class GamePostComponent{

    private gameService:GameService;
    private game:any = {};
    private router: Router;
    private user: any;

    constructor(_gameService:GameService, _router:Router){
        this.gameService = _gameService;
        this.router = _router;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.game.userAuthor = this.user.name;
        console.log(this.game.userAuthor);
    }

    private saveGame(){
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.game.userAuthor = this.user.name;
        console.log(this.user);
        this.gameService.addGamePost(this.game).subscribe(data => {
           this.router.navigateByUrl('/home');
        },
        error =>{});
    }
}