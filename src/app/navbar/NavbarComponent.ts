import {ROUTER_DIRECTIVES} from '@angular/router';
import {Component} from "@angular/core";
import {Location} from "@angular/common";

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {
    constructor(private location: Location) {}

    highlight(path: string) {
        if (path === '/') {
            path = '';
        }
        var currentPath:string = this.location.path();
        return currentPath === path;
    }
}
