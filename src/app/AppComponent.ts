import {HTTP_PROVIDERS} from '@angular/http';
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {FantasyTeamService} from "./shared/services/FantasyTeamService";
import {LogService} from "./shared/services/LogService";
import {NavbarComponent} from "./navbar/NavbarComponent";
import {PlayerService} from "./shared/services/PlayerService";

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
