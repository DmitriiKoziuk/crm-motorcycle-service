import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ActionLogComponent} from './action-log.component';

const ROUTES: Routes = [
  {path: '', component: ActionLogComponent}
];

@NgModule({
  declarations: [
    ActionLogComponent,
  ],
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class ActionLogModule {}
