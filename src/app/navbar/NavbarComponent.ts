import {ROUTER_DIRECTIVES} from '@angular/router';
import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {
    constructor(private location: Location) {}

    highlight(path: string) {
        if (path === '/') {
            path = '';
        }
        let currentPath: string = this.location.path();
        return currentPath === path;
    }
}
