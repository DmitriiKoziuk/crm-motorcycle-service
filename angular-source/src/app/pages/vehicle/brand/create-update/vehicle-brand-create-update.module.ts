import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../../shared/modules/material.module';
import { VehicleBrandCreateUpdateComponent } from './vehicle-brand-create-update.component';

const ROUTES: Routes = [
  {path: '', component: VehicleBrandCreateUpdateComponent},
];

@NgModule({
  declarations: [
    VehicleBrandCreateUpdateComponent,
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
export class VehicleBrandCreateUpdateModule {}
