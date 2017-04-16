import {Component, OnInit} from '@angular/core';
import {FantasyTeamService} from '../shared/services/FantasyTeamService';
import {FantasyTeam} from '../shared/model/model';

@Component({
    selector: 'fantasyteams',
    templateUrl: 'fantasyteams.component.html'
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
