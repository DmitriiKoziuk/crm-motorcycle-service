import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { VehicleListComponent } from './vehicle-list.component';
import { MaterialModule } from '../../../shared/modules/material.module';

@NgModule({
  declarations: [
    VehicleListComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class VehicleListModule {}
