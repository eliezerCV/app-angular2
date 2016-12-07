// import {Component} from '@angular/core';
// import {User} from '../models/user';
// import { Router } from '@angular/router';
// @Component({
//     selector: 'home',
//     templateUrl:'app/home/home.component.html',
//     styleUrls:['app/home/menu.css']
// })
// export class HomeComponent{
//     titulo:string = "Estas ahora mismo en HomeComponent";
//     private router: Router;
//     currentUser: User;
//     constructor(_router: Router){
//         this.router = _router; 
//         if (localStorage.getItem('currentUser')) {
//             //obtenemos los datos del usuario en sesion
//             this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
//         } else{
//             // 
//         }
//     }
//     logout() {
//         // remove user from local storage to log user out
//         localStorage.removeItem('currentUser');
//         this.router.navigateByUrl('/home');
//     }
// } 
//# sourceMappingURL=home.component.js.map