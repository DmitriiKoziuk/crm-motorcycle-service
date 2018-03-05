import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../../shared/modules/material.module';
import { VehicleTypeCreateComponent } from './vehicle-type-create.component';

const ROUTES: Routes = [
  {path: '', component: VehicleTypeCreateComponent},
];

@NgModule({
  declarations: [
    VehicleTypeCreateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class VehicleTypeCreateModule {}
