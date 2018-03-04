import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { FullLayoutModule } from './layouts/full-layout.module';

const ROUTES: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'user', loadChildren: './pages/user/user.module#UserModule' },
      { path: 'client', loadChildren: './pages/client/client.module#ClientModule' },
      { path: 'vehicle', loadChildren: './pages/vehicle/vehicle.module#VehicleModule' },
      { path: 'action-log', loadChildren: './pages/action-log/action-log.module#ActionLogModule'},
    ]
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
    ]
  },
];

@NgModule({
  declarations: [
    SimpleLayoutComponent,
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    FullLayoutModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
