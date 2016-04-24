import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
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
@RouteConfig([
  { path: '/', as: 'Draft', component: DraftComponent, useAsDefault: true },
  { path: '/teams', as: 'Teams', component: FantasyTeamsComponent }
].concat(CliRouteConfig))

export class AppComponent {

  constructor() {

  }
  
}
