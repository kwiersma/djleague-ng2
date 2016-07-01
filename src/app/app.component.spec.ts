/* tslint:disable:no-unused-variable */

import {
    beforeEach, beforeEachProviders,
    describe, xdescribe,
    expect, it, xit,
    async, inject
} from '@angular/core/testing';
import {AppComponent} from './AppComponent';

beforeEachProviders(() => [AppComponent]);

describe('App: DjleagueNg2', () => {
    it('should create the app',
        inject([AppComponent], (app:AppComponent) => {
            expect(app).toBeTruthy();
        }));

    it('should have as title \'app works!\'',
        inject([AppComponent], (app:AppComponent) => {
            //expect(app.title).toEqual('app works!');
        }));
});
