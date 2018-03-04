import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../shared/modules/material.module';

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
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class ActionLogModule {}
