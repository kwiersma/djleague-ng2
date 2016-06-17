import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'player-filter',
    templateUrl: 'app/players/playerfilter.component.html'
})
export class PlayerFilterComponent {

    model: { lastname: string } = { lastname: null };

    @Output()
    changed: EventEmitter<any> = new EventEmitter();

    constructor() {}

    filterChanged(event: any) {
        event.preventDefault();
        this.changed.emit(this.model.lastname); //Raise changed event
    }

}
