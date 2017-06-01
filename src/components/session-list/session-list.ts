import { Component, Input } from '@angular/core';
import { Session } from '../../models/session';

/**
 * Generated class for the SessionListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'session-list',
  templateUrl: 'session-list.html'
})
export class SessionListComponent {

  @Input() sessions: Session[];

  constructor() {
  }

}
