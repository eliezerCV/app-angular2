import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {GameService} from '../services';
import {SUDComponent} from './sud.component';
import {FilterCategoryComponent} from './filter-category.component';
import {GameContainerComponent} from '../game/gameContainer.component';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/home/nav.component.html',
    styleUrls:['app/home/menu.css'],
     providers: [GameService]
})

export class NavComponent{

    private gameService: GameService;
    private loaded:boolean = false;
    private user: any = {};
    private games: Array<any>;
    router: Router;
    private idRoute:string;
    constructor(_router:Router, _gameservice:GameService){
        this.router = _router;
        this.loaded = true;
        this.gameService = _gameservice;
    }

    getIdGame(id){
        this.idRoute = id;
        console.log(this.idRoute);
    }

}