import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services';
import {SUDComponent} from '../home/sud.component';

@Component({
    selector: 'user-profile',
    templateUrl: 'app/user/userProfile.component.html',
    providers: [UserService]
})

export class UserProfileComponent{

    private message: string;
    private user: any = {};
    private currentUser: any = {};
    private userService:UserService;
    private router: Router;

    constructor(_router: Router, _userService: UserService){
        this.userService = _userService;
        this.router = _router;
    }

    ngOnInit(){
        if(localStorage.getItem('currentUser')){
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        
        this.user.userId = this.currentUser.userId;
        this.userService.getUserByName(this.currentUser.name).subscribe(data => {
        this.user = data;
        },
        error =>{});
    }

    updateProfile(){
        this.userService.updateUser(this.user.name, this.user.lasName, this.user.email,this.currentUser.userId).subscribe(data =>{
            this.router.navigateByUrl('/home');
        },
        error => {});
    }
}