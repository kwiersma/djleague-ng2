import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {PlayerListComponent} from "../players/PlayerListComponent";
import {DraftOrderComponent} from "./DraftOrderComponent";
import {FantasyTeam} from "../shared/model/model";
import {FantasyTeamService} from "../shared/services/FantasyTeamService";

@Component({
    selector: 'draft',
    templateUrl: 'app/draft/draft.component.html',
    directives: [ROUTER_DIRECTIVES, PlayerListComponent, DraftOrderComponent]
})
export class DraftComponent implements OnInit {

    teams: FantasyTeam[];

    constructor(private fantasyTeamService: FantasyTeamService) {}

    ngOnInit() {
        this.fantasyTeamService.getFantasyTeams()
            .subscribe((response: FantasyTeam[]) => {
                this.teams = response;
            });
    }
}
