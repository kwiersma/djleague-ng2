import { Injectable } from 'angular2/core';

export interface ILogService {
    log(message: string): void;
}

@Injectable()
export class LogService implements ILogService {

    constructor() { }

    log(message: string) {
        console.log(message);
    }

}