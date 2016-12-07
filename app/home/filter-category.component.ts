import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'filter-category',
    templateUrl: 'app/home/filter-category.component.html'
})

export class FilterCategoryComponent{

    router: Router;

    constructor(_router: Router){
        this.router = _router;
    }
}