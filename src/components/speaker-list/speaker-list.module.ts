import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeakerListComponent } from './speaker-list';

@NgModule({
  declarations: [
    SpeakerListComponent,
  ],
  imports: [
    IonicPageModule.forChild(SpeakerListComponent),
  ],
  exports: [
    SpeakerListComponent
  ]
})
export class SpeakerListComponentModule {}
