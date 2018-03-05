import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehicleListComponent } from './list/vehicle-list.component';
import { VehicleListModule } from './list/vehicle-list.module';


const ROUTES: Routes = [
  {path: '', component: VehicleListComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES),
    VehicleListModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class VehicleModule {}
