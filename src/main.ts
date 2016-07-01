import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
//import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent, environment, APP_ROUTER_PROVIDERS } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
  //,disableDeprecatedForms(),
  //provideForms()
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);

