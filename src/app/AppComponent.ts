import {HTTP_PROVIDERS} from '@angular/http';
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { provideRouter, RouterConfig } from '@angular/router';

import {DraftComponent} from "./draft/DraftComponent";
import {FantasyTeamService} from "./shared/services/FantasyTeamService";
import {FantasyTeamsComponent} from "./fantasyteams/FantasyTeamsComponent";
import {LogService} from "./shared/services/LogService";
import {NavbarComponent} from "./navbar/NavbarComponent";
import {PlayerService} from "./shared/services/PlayerService";

const appRoutes: RouterConfig = [
  { path: '', terminal: true, component: DraftComponent },
  { path: 'teams', component: FantasyTeamsComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(appRoutes)
];

@Component({
  selector: 'app-component',
  providers: [HTTP_PROVIDERS, FantasyTeamService, PlayerService, LogService],
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent],
  pipes: []
})
export class AppComponent {

  constructor() {

  }
  
}
