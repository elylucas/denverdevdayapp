import { Component, EventEmitter, Input, Output } from '@angular/core';
import Speaker from '../../models/speaker';

@Component({
  selector: 'speaker-list',
  templateUrl: 'speaker-list.html'
})
export class SpeakerListComponent {

  @Input() speakers: Speaker[];
  @Output() speakerSelected: EventEmitter<Speaker> = new EventEmitter<Speaker>();

  constructor() {
  }

  speakerClick(speaker: Speaker) {
    this.speakerSelected.emit(speaker);
  }

}
