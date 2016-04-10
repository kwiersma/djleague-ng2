import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {DjleagueNg2App} from '../app/djleague-ng2';

beforeEachProviders(() => [DjleagueNg2App]);

describe('App: DjleagueNg2', () => {
  it('should have the `defaultMeaning` as 42', inject([DjleagueNg2App], (app: DjleagueNg2App) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([DjleagueNg2App], (app: DjleagueNg2App) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

