import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Session } from '../../models/session';

@Component({
  selector: 'session-list',
  templateUrl: 'session-list.html'
})
export class SessionListComponent {

  @Input() sessions: Session[];
  @Output() sessionSelected: EventEmitter<Session> = new EventEmitter<Session>();

  constructor() {
  }

  sessionClick(session: Session) {
    this.sessionSelected.emit(session);
  }

}
