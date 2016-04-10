import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {DraftComponent} from "./draft/DraftComponent";

@Component({
  selector: 'djleague-ng2-app',
  providers: [ROUTER_PROVIDERS],
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  { path: '/', as: 'Draft', component: DraftComponent, useAsDefault: true },
].concat(CliRouteConfig))

export class AppComponent {

  constructor() {

  }
  
}
