import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {FantasyTeamService} from "../shared/services/FantasyTeamService";
import {FantasyTeam} from "../shared/model/FantasyTeam";

@Component({
    selector: 'draft',
    templateUrl: 'app/draft/draft.component.html',
    directives: [RouterLink]
})

export class DraftComponent implements OnInit {
    teams: FantasyTeam[];

    constructor(private fantasyTeamService: FantasyTeamService) {

    }

    ngOnInit() {
        this.getFantasyTeams();
    }

    private getFantasyTeams() {
        this.fantasyTeamService.getFantasyTeams()
            .subscribe((response: FantasyTeam[]) => {
                this.teams = response;
            });
    }

}
