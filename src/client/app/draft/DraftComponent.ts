import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {PlayerListComponent} from "../players/PlayerListComponent";

@Component({
    selector: 'draft',
    templateUrl: 'app/draft/draft.component.html',
    directives: [RouterLink, PlayerListComponent]
})

export class DraftComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }

}
