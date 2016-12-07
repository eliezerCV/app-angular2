import {Component, EventEmitter, Output, Injectable} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector:'sud',
    templateUrl:'app/home/sud.component.html',
    styleUrls:['app/home/menu.css']
})

export class SUDComponent{

    private user: any = {};
    
    constructor(private _router: Router){
        this.user = null;
    }

    ngOnInit(){
        if (localStorage.getItem('currentUser')) {
            //obtenemos los datos del usuario en sesion
            this.user = JSON.parse(localStorage.getItem('currentUser'));
            console.log(this.user.name);
        } 
    }
  

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.user = null;
        this._router.navigateByUrl('/home');
    }
}