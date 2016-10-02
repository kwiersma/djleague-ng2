import {Component, Input} from '@angular/core';
import {FantasyTeam} from '../shared/model/model';

@Component({
    selector: 'draft-order',
    templateUrl: 'draftorder.component.html'
})
export class DraftOrderComponent {
    @Input()
    teams: FantasyTeam[] = [];

    constructor() {

    }
}
