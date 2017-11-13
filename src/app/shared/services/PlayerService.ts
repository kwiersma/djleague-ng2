import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LogService} from './LogService';
import {Player} from '../model/model';
import {of} from 'rxjs/observable/of';
import {catchError, tap, share} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/share';

@Injectable()
export class PlayerService {
    private playersObservable: Observable<Player[]>;
    private playersData: Player[];

    constructor(private http: HttpClient, private logService: LogService) {}

    getPlayers(): Observable<Player[]> {
        // http://stackoverflow.com/questions/36271899/what-is-the-correct-way-to-share-the-result-of-an-angular-2-http-network-call-in
        // http://stackoverflow.com/questions/34104277/caching-results-with-angular2-http-service
        if (this.playersData) {
            // if `data` is available just return it as `Observable`
            this.logService.log('teams.json loaded from cache');
            return of(this.playersData);
        } else {
            if (this.playersObservable) {
                // if `this.observable` is set then the request is in progress
                // return the `Observable` for the ongoing request
                return this.playersObservable;
            } else {
                // create the request, store the `Observable` for subsequent subscribers
                this.logService.log('requesting players.json');
                this.playersObservable = this.http.get<Player[]>('players.js')
                    .pipe(
                        tap((val: Player[]) => {
                            this.playersData = val;
                            // when the cached data is available we don't need the 'Observable' reference anymore
                            this.playersObservable = null;
                            this.logService.debug('teams.json fetched');
                        }),
                        catchError(this.handleError('getPlayers', []))
                    )
                    .share();
                return this.playersObservable;
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
