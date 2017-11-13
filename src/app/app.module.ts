import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LogService} from './shared/services/LogService';
import {FantasyTeamService} from './shared/services/FantasyTeamService';
import {PlayerService} from './shared/services/PlayerService';
import {NavbarComponent} from './navbar/NavbarComponent';
import {DraftComponent} from './draft/DraftComponent';
import {PlayerFilterComponent} from './players/PlayerFilterComponent';
import {PlayerListComponent} from './players/PlayerListComponent';
import {FantasyTeamsComponent} from './fantasyteams/FantasyTeamsComponent';
import {DraftOrderComponent} from './draft/DraftOrderComponent';
import {AppComponent} from './AppComponent';
import {app_routing} from './app.routes';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        DraftComponent,
        PlayerFilterComponent,
        PlayerListComponent,
        FantasyTeamsComponent,
        DraftComponent,
        DraftOrderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        RouterModule,
        app_routing
    ],
    providers: [FantasyTeamService, PlayerService, LogService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
