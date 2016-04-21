import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {FantasyTeamService} from "./FantasyTeamService";


describe('FantasyTeamService Service', () => {

  beforeEachProviders(() => [FantasyTeamService]);


  it('should ...', inject([FantasyTeamService], (service: FantasyTeamService) => {

  }));

});
