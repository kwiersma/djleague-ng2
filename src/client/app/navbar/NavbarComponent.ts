import {RouterLink, Location} from 'angular2/router';
import {Component} from "angular2/core";

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/navbar.component.html',
    directives: [RouterLink]
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