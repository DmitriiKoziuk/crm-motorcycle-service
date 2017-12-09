import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { MaterialModule } from '../../shared/modules/material.module';
import { TelephonePipe } from '../../shared/pipes/telephone.pipe';

const ROUTES: Routes = [
  {path: '', component: UserComponent}
];

@NgModule({
  declarations: [
    UserComponent,
    TelephonePipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialModule
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule {}
