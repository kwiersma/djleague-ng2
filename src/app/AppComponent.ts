import {HTTP_PROVIDERS} from '@angular/http';
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes} from '@angular/router';

import {DraftComponent} from "./draft/DraftComponent";
import {FantasyTeamService} from "./shared/services/FantasyTeamService";
import {FantasyTeamsComponent} from "./fantasyteams/FantasyTeamsComponent";
import {LogService} from "./shared/services/LogService";
import {NavbarComponent} from "./navbar/NavbarComponent";
import {PlayerService} from "./shared/services/PlayerService";

@Component({
  selector: 'app-component',
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, FantasyTeamService, PlayerService, LogService],
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent],
  pipes: []
})
@Routes([
  { path: '/', component: DraftComponent },
  { path: '/teams', component: FantasyTeamsComponent }
])
export class AppComponent {

  constructor() {

  }
  
}
