import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {UserLoginComponent} from './user/userLogin.component';
import {UserRegisterComponent} from './user/userRegister.component';
import {UserProfileComponent} from './user/userProfile.component';
import {UserAccountComponent} from './user/userAccount.component';
import {UserGameComponent} from './user/userGames.component';
import {GameContainerComponent} from './game/gameContainer.component';
import {GamePostComponent} from './game/gamePost.component';
import {ShowGamePosted} from './game/showGamePosted.component';

const appRoutes: Routes = [
    {path: 'home', component: AppComponent},
    {path: 'userLogin', component: UserLoginComponent},
    {path: 'userRegister', component: UserRegisterComponent},
    {path: 'userProfile', component: UserProfileComponent},
    {path: 'userAccount', component: UserAccountComponent},
    {path: 'userGames', component: UserGameComponent},
    {path: 'gameContainer', component: GameContainerComponent},
    {path: 'gamePost', component: GamePostComponent},
    {path: 'gamePosted/:id', component: ShowGamePosted},
    {path: '',redirectTo:'/home', pathMatch: 'full'}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);