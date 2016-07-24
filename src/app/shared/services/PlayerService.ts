import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {LogService} from './LogService';
import {Player} from '../model/model';


@Injectable()
export class PlayerService {
    private playersObservable: Observable<Player[]>;
    private playersData: Player[];

    constructor(private http: Http, private logService: LogService) {}

    getPlayers(): Observable<Player[]> {
        // http://stackoverflow.com/questions/36271899/what-is-the-correct-way-to-share-the-result-of-an-angular-2-http-network-call-in
        // http://stackoverflow.com/questions/34104277/caching-results-with-angular2-http-service
        if (this.playersData) {
            // if `data` is available just return it as `Observable`
            this.logService.log('teams.json loaded from cache');
            return Observable.of(this.playersData);
        } else {
            if (this.playersObservable) {
                // if `this.observable` is set then the request is in progress
                // return the `Observable` for the ongoing request
                return this.playersObservable;
            } else {
                // create the request, store the `Observable` for subsequent subscribers
                this.logService.log('requesting players.json');
                this.playersObservable = this.http.get('players.js')
                    .map((response: Response) => {
                        return <Player[]> response.json();
                    })
                    .do((val) => {
                        this.playersData = val;
                        // when the cached data is available we don't need the 'Observable' reference anymore
                        this.playersObservable = null;
                        this.logService.debug('teams.json fetched');
                    })
                    .catch(this.handleError)
                    // make it shared so more than one subscriber can get the result
                    .share();
                return this.playersObservable;
            }
        }
    }

    handleError(error: any) {
        this.logService.log('Error: ' + error);
        return Observable.throw(error.json().error || 'Server error');
    }


}
