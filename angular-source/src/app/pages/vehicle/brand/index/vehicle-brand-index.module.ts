import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../../../shared/modules/material.module';
import { VehicleBrandIndexComponent } from './vehicle-brand-index.component';

@NgModule({
  declarations: [
    VehicleBrandIndexComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class VehicleBrandIndexModule {}
