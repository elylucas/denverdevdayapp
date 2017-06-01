import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SessionListComponent } from './session-list';

@NgModule({
  declarations: [
    SessionListComponent,
  ],
  imports: [
    IonicPageModule.forChild(SessionListComponent),
  ],
  exports: [
    SessionListComponent
  ]
})
export class SessionListComponentModule {}
