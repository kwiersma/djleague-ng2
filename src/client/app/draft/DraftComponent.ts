import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {PlayerListComponent} from "../players/PlayerListComponent";
import {DraftOrderComponent} from "./DraftOrderComponent";
import {FantasyTeam} from "../shared/model/model";
import {FantasyTeamService} from "../shared/services/FantasyTeamService";

@Component({
    selector: 'draft',
    templateUrl: 'app/draft/draft.component.html',
    directives: [RouterLink, PlayerListComponent, DraftOrderComponent]
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
