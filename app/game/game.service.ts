import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class GameService{

        private apiUrl:string = "http://localhost:5000/api/games";
    private http: Http;

    constructor(_http:Http){
        this.http = _http;
    }

    public getGames() {
        return this.http.get(this.apiUrl).map(res => res.json());    
    }

    public getGameByUserName(name:string){
        return this.http.get(this.apiUrl+'?userAuthor='+name).map(res => res.json());  
    }

    public getgameById(id:string){
        return this.http.get(this.apiUrl+'/'+id).map(res => res.json());
    }

    public addGamePost(game:any){

        let gamedata = "title="+game.title+"&genre="+game.genre+"&platforms="
            +game.platforms+"&languages="+game.languages+"&players="+game.players+"&description="
            +game.description+"&userAuthor="+game.userAuthor;

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post(this.apiUrl, gamedata, {headers:headers})
           .map((response: Response) => response.json());
    }
}