import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LogService} from './LogService';
import {FantasyTeam} from '../model/model';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {catchError, tap} from 'rxjs/operators';
import 'rxjs/add/operator/share';

@Injectable()
export class FantasyTeamService {
    private teamsObservable: Observable<FantasyTeam[]>;
    private teamsData: FantasyTeam[];

    constructor(private http: HttpClient, private logService: LogService) { }

    getFantasyTeams(): Observable<FantasyTeam[]> {
        // http://stackoverflow.com/questions/36271899/what-is-the-correct-way-to-share-the-result-of-an-angular-2-http-network-call-in
        // http://stackoverflow.com/questions/34104277/caching-results-with-angular2-http-service
        if (this.teamsData) {
            // if `data` is available just return it as `Observable`
            this.logService.log('teams.json loaded from cache');
            return of(this.teamsData);
        } else {
            if (this.teamsObservable) {
                // if `this.observable` is set then the request is in progress
                // return the `Observable` for the ongoing request
                return this.teamsObservable;
            } else {
                // create the request, store the `Observable` for subsequent subscribers
                this.logService.log('requesting teams.js');
                this.teamsObservable = this.http.get<FantasyTeam[]>('teams.js')
                    .pipe(
                        tap((val: FantasyTeam[]) => {
                          this.teamsData = val;
                          // when the cached data is available we don't need the 'Observable' reference anymore
                          this.teamsObservable = null;
                          this.logService.debug('teams.json fetched', this.teamsData);
                        }),
                        catchError(this.handleError('getFantasyTeams', []))
                    )
                    .share();
                return this.teamsObservable;
            }
        }
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

      this.logService.log('Error: ' + error);
      this.logService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
      };
    }


}
