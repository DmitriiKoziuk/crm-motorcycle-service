import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { MaterialModule } from '../../shared/modules/material.module';

const loginRoutes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule.forChild(loginRoutes),
    ReactiveFormsModule,
  ],
})
export class LoginModule { }
