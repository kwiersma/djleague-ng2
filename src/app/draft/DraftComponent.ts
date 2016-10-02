import {Component, OnInit} from '@angular/core';
import {FantasyTeam} from '../shared/model/model';
import {FantasyTeamService} from '../shared/services/FantasyTeamService';

@Component({
    selector: 'draft',
    templateUrl: 'draft.component.html'
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
