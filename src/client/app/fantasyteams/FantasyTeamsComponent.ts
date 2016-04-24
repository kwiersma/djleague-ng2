import {Component, OnInit} from "angular2/core";
import {FantasyTeamService} from "../shared/services/FantasyTeamService";
import {FantasyTeam} from "../shared/model/model";

@Component({
    selector: 'fantasyteams',
    templateUrl: 'app/fantasyteams/fantasyteams.component.html'
})
export class FantasyTeamsComponent implements OnInit {
    teams: FantasyTeam[];
    
    constructor(private fantasyTeamService: FantasyTeamService) {}

    ngOnInit() {
        this.fantasyTeamService.getFantasyTeams()
            .subscribe((response: FantasyTeam[]) => {
                this.teams = response;
            });
    }

}