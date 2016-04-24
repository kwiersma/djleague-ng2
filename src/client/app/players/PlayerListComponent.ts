import {Component, OnInit} from "angular2/core";
import {PlayerService} from "../shared/services/PlayerService";
import {Player} from "../shared/model/model";

@Component({
    selector: 'player-list',
    templateUrl: 'app/players/playerlist.component.html'
})
export class PlayerListComponent implements OnInit {
    players: Player[];

    constructor(private playerService: PlayerService) {}

    ngOnInit() {
        this.playerService.getPlayers()
            .subscribe((response: Player[]) => {
                this.players = response;
            });
    }

}