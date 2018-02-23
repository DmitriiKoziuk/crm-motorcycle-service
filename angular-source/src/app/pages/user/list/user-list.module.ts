import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserListComponent } from './user-list.component';
import { MaterialModule } from '../../../shared/modules/material.module';
import { UserListSearchFormComponent } from './search-form/user-list-search-form.component';
import { PipeModule } from '../../../shared/modules/pipe.module';

@NgModule({
  declarations: [
    UserListComponent,
    UserListSearchFormComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
  ],
})
export class UserListModule {}
