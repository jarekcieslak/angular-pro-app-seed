import { Component, DoCheck } from '@angular/core';

@Component({
    selector: 'schedule',
    styleUrls: ['schedule.component.scss'],
    template: `
        <div>
            Schedule
            <button>test</button>
            <button (click)="click()">click</button>
        </div>
    `
})
export class ScheduleComponent implements DoCheck {
    constructor() {
    }

    ngDoCheck() {
        console.log('check');
    }
}