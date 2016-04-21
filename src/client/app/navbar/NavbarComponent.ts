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
        return this.location.path() === path;
    }
}