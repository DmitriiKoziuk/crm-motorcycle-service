import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserProfileComponent } from './user-profile.component';
import { MaterialModule } from '../../../shared/modules/material.module';

const ROUTES: Routes = [
  {path: '', component: UserProfileComponent},
];

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class UserProfileModule {}
