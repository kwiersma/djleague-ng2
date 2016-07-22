import {FantasyTeamsComponent} from "./fantasyteams/FantasyTeamsComponent";
import {DraftComponent} from "./draft/DraftComponent";
import {RouterConfig, provideRouter} from "@angular/router";

const appRoutes: RouterConfig = [
    { path: '', terminal: true, component: DraftComponent },
    { path: 'teams', component: FantasyTeamsComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(appRoutes)
];