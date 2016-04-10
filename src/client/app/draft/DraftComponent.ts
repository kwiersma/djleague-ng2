import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, RouterLink} from 'angular2/router';

@Component({
    selector: 'draft',
    templateUrl: 'app/draft/draft.component.html',
    directives: [RouterLink],
})

export class DraftComponent {

    constructor() {

    }

}
