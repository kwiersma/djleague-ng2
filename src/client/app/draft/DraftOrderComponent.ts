import {Component, Input} from "angular2/core";
import {FantasyTeam} from "../shared/model/model";

@Component({
    selector: 'draft-order',
    templateUrl: 'app/draft/draftorder.component.html'
})
export class DraftOrderComponent {
    @Input()
    teams: FantasyTeam[] = [];

    constructor() {

    }
}