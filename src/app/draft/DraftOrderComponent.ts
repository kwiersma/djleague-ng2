import {Component, Input} from '@angular/core';
import {FantasyTeam} from '../shared/model/model';

@Component({
    moduleId: module.id,
    selector: 'draft-order',
    templateUrl: 'draftorder.component.html'
})
export class DraftOrderComponent {
    @Input()
    teams: FantasyTeam[] = [];

    constructor() {

    }
}
