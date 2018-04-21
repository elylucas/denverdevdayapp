import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Session } from '../../models/session';
import * as moment from 'moment';
@Component({
  selector: 'coming-soon',
  templateUrl: 'coming-soon.html'
})
export class ComingSoonComponent {

  @Input() event: Event;
  formatedDateString: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const event = changes.event.currentValue as Event;
    this.formatedDateString = moment(event.startTime).format('dddd MMMM Do, YYYY');
  }

}
