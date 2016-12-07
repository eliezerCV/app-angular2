import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {UserLoginComponent} from './user/userLogin.component';
import {NavComponent} from './home/nav.component';
import {UserRegisterComponent} from './user/userRegister.component';
import {Routing} from './app.routing';
import { FormsModule } from '@angular/forms';
import {SUDComponent} from './home/sud.component';
import {FilterCategoryComponent} from './home/filter-category.component';
import {UserProfileComponent} from './user/userProfile.component';
import {UserAccountComponent} from './user/userAccount.component';
import {UserGameComponent} from './user/userGames.component';
import {GameContainerComponent} from './game/gameContainer.component';
import {GamePostComponent} from './game/gamePost.component';
import {ShowGamePosted} from './game/showGamePosted.component';
 

@NgModule({
    imports: [BrowserModule, HttpModule, Routing, FormsModule],
    declarations: [AppComponent,NavComponent,UserLoginComponent,UserRegisterComponent,
                SUDComponent, FilterCategoryComponent, UserProfileComponent, UserAccountComponent,
                UserGameComponent, GameContainerComponent, GamePostComponent, ShowGamePosted],
    bootstrap: [AppComponent]
})
export class AppModule { }