import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';

import { UserListComponent } from './user-list.component';
import { MaterialModule} from '../../../shared/modules/material.module';
import { TelephonePipe } from '../../../shared/pipes/telephone.pipe';

@NgModule({
  declarations: [
    UserListComponent,
    TelephonePipe,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
  ]
})
export class UserListModule {}
