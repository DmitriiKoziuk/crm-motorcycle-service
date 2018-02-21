import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserListComponent } from './user-list.component';
import { MaterialModule } from '../../../shared/modules/material.module';
import { TelephonePipe } from '../../../shared/pipes/telephone.pipe';
import { UserListSearchFormComponent } from './search-form/user-list-search-form.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserListSearchFormComponent,
    TelephonePipe,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserListModule {}
