import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../shared/services/PlayerService';
import {Player} from '../shared/model/model';
import {PlayerFilterComponent} from './PlayerFilterComponent';

@Component({
    moduleId: module.id,
    selector: 'player-list',
    templateUrl: 'playerlist.component.html',
    directives: [PlayerFilterComponent]
})
export class PlayerListComponent implements OnInit {
    players: Player[];
    filteredPlayers: Player[];

    constructor(private playerService: PlayerService) {}

    ngOnInit() {
        this.playerService.getPlayers()
            .subscribe((response: Player[]) => {
                this.players = this.filteredPlayers = response;
            });
    }

    playerFilterChanged(lastname: string) {
        if (lastname && this.players) {
            lastname = lastname.toLowerCase();
            let filtered = this.players.filter((player: Player) => {
                let match = false;
                let regExp = new RegExp('^' + lastname, 'i');
                if (player.lastname.search(regExp) !== -1) {
                    match = true;
                }
                return match;
            });
            this.filteredPlayers = filtered;
        } else {
            this.filteredPlayers = this.players;
        }
    }
}
