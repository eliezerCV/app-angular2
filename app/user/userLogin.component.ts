import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../services';

@Component({
    selector: 'userLogin',
    templateUrl:'app/user/userLogin.component.html',
    providers :[UserService]
})

export class UserLoginComponent{
    
    private usuario:any = {};
    private router: Router;
    private userService: UserService;

    constructor(_router: Router,_userService:UserService){
        this.router = _router; 
        this.userService = _userService;
    }

    login(){
        this.userService.authUser(this.usuario.username, this.usuario.password).subscribe(data => {
            this.router.navigateByUrl('/home');
        },
        error =>{});
    }
}