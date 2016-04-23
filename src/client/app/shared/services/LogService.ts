import { Injectable } from 'angular2/core';

export interface ILogService {
    log(message: string): void;
    debug(message: string, extra?:any):void;
}

@Injectable()
export class LogService implements ILogService {

    constructor() { }

    log(message: string) {
        console.log(message);
    }

    debug(message: string, extra?:any) {
        console.debug(message, extra);
    }

}