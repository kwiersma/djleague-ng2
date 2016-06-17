import {Component, OnInit} from "@angular/core";
import {PlayerService} from "../shared/services/PlayerService";
import {Player} from "../shared/model/model";
import {PlayerFilterComponent} from "./PlayerFilterComponent";

@Component({
    selector: 'player-list',
    templateUrl: 'app/players/playerlist.component.html',
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
            var filtered = this.players.filter((player: Player) => {
                var match = false;
                var regExp = new RegExp("^" + lastname, "i");
                if (player.lastname.search(regExp) != -1) {
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