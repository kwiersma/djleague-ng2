import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {DraftComponent} from "./draft/DraftComponent";
import {FantasyTeamService} from "./shared/services/FantasyTeamService";
import {FantasyTeamsComponent} from "./fantasyteams";

@Component({
  selector: 'app-component',
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, FantasyTeamService],
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  { path: '/', as: 'Draft', component: DraftComponent, useAsDefault: true },
  { path: '/teams', as: 'Teams', component: FantasyTeamsComponent },
].concat(CliRouteConfig))

export class AppComponent {

  constructor() {

  }
  
}
