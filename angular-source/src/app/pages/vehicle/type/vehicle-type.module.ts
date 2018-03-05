import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehicleTypeListComponent } from './list/vehicle-type-list.component';
import { VehicleTypeListModule } from './list/vehicle-type-list.module';

const ROUTES: Routes = [
  {path: '', component: VehicleTypeListComponent},
  {path: 'create', loadChildren: './create/vehicle-type-create.module#VehicleTypeCreateModule'},
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    VehicleTypeListModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class VehicleTypeModule {}
