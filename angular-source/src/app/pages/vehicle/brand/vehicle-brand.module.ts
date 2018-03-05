import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehicleBrandIndexModule } from './index/vehicle-brand-index.module';
import { VehicleBrandIndexComponent } from './index/vehicle-brand-index.component';


const ROUTES: Routes = [
  {path: '', component: VehicleBrandIndexComponent},
  {path: 'create', loadChildren: './create-update/vehicle-brand-create-update.module#VehicleBrandCreateUpdateModule'},
  {path: ':id', loadChildren: './create-update/vehicle-brand-create-update.module#VehicleBrandCreateUpdateModule'},
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    VehicleBrandIndexModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class VehicleBrandModule {}
