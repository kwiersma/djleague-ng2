import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/AppComponent';
import { environment } from './app/environment';

if (environment.production) {
    enableProdMode();
}

bootstrap(AppComponent, []);
