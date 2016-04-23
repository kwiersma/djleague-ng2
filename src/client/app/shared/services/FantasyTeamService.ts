import {Injectable} from 'angular2/core';
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Rx";
import {FantasyTeam} from "../model/FantasyTeam";
import {LogService} from "./LogService";


@Injectable()
export class FantasyTeamService {
    private teamsObservable: Observable<FantasyTeam[]>;
    private teamsData:FantasyTeam[];

    constructor(private http: Http, private logService: LogService) {}

    getFantasyTeams(): Observable<FantasyTeam[]> {
        // http://stackoverflow.com/questions/36271899/what-is-the-correct-way-to-share-the-result-of-an-angular-2-http-network-call-in
        // http://stackoverflow.com/questions/34104277/caching-results-with-angular2-http-service
        if (this.teamsData) {
            // if `data` is available just return it as `Observable`
            this.logService.log('teams.json loaded from cache');
            return Observable.of(this.teamsData);
        } else {
            if(this.teamsObservable) {
                // if `this.observable` is set then the request is in progress
                // return the `Observable` for the ongoing request
                return this.teamsObservable;
            } else {
                // create the request, store the `Observable` for subsequent subscribers
                this.logService.log('requesting teams.json');
                this.teamsObservable = this.http.get("/teams.json")
                    .map((response:Response) => {
                        return <FantasyTeam[]> response.json();
                    })
                    .do((val) => {
                        this.teamsData = val;
                        // when the cached data is available we don't need the 'Observable' reference anymore
                        this.teamsObservable = null;
                        this.logService.debug('teams.json fetched', this.teamsData);
                    })
                    .catch(this.handleError)
                    // make it shared so more than one subscriber can get the result
                    .share();
                return this.teamsObservable;
            }
        }
    }

    handleError(error: any) {
        this.logService.log('Error: ' + error);
        return Observable.throw(error.json().error || 'Server error');
    }


}
