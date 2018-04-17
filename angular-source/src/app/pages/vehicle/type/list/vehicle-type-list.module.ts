import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../../../shared/modules/material.module';
import { VehicleTypeListComponent } from './vehicle-type-list.component';

@NgModule({
  declarations: [
    VehicleTypeListComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class VehicleTypeListModule {}
