import {Injectable} from 'angular2/core';
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Rx";
import {FantasyTeam} from "../model/FantasyTeam";
import {LogService} from "./LogService";


@Injectable()
export class FantasyTeamService {
    teams: Observable<FantasyTeam[]>;

    constructor(private http: Http, private logService: LogService) {}

    getFantasyTeams(): Observable<FantasyTeam[]> {
        if (this.teams === undefined) {
            this.teams = this.http.get("/teams.json")
                .map((response: Response) => {
                    return <FantasyTeam[]> response.json();
                })
                .catch(this.handleError);
        }
        return this.teams;
    }

    handleError(error: any) {
        this.logService.log('Error: ' + error);
        return Observable.throw(error.json().error || 'Server error');
    }


}
