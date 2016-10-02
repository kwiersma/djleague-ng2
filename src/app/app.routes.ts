import {FantasyTeamsComponent} from './fantasyteams/FantasyTeamsComponent';
import {DraftComponent} from './draft/DraftComponent';
import {Routes, RouterModule} from "@angular/router";

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: "/players" },
    { path: 'players', component: DraftComponent },
    { path: 'teams', component: FantasyTeamsComponent }
];

export const app_routing = RouterModule.forRoot(appRoutes);
