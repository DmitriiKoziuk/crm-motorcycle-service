import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../shared/modules/material.module';
import { VehicleCreateUpdateComponent } from './vehicle-create-update.component';

const ROUTES: Routes = [
  {path: '', component: VehicleCreateUpdateComponent},
];

@NgModule({
  declarations: [
    VehicleCreateUpdateComponent,
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
export class VehicleCreateUpdateModule {}
