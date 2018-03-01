import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ClientCreateComponent } from './client-create.component';
import { MaterialModule } from '../../../shared/modules/material.module';
import { PipeModule } from '../../../shared/modules/pipe.module';

const ROUTES: Routes = [
  {path: '', component: ClientCreateComponent},
];

@NgModule({
  declarations: [
    ClientCreateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class ClientCreateModule {
}
