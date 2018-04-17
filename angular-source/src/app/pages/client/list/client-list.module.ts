import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClientListComponent } from './client-list.component';
import { MaterialModule } from '../../../shared/modules/material.module';
import { ClientListSearchFormComponent } from './search-form/client-list-search-form.component';
import { PipeModule } from '../../../shared/modules/pipe.module';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientListSearchFormComponent,
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
export class ClientListModule {}
