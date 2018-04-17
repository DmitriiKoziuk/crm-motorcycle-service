import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserProfileComponent } from './user-profile.component';
import { MaterialModule } from '../../../shared/modules/material.module';
import { UserRecord } from '../../../shared/records/user.record';

const ROUTES: Routes = [
  {path: '', component: UserProfileComponent},
];

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserRecord,
  ],
  exports: [
    RouterModule,
  ],
})
export class UserProfileModule {}
