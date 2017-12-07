import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import {FullLayoutModule} from './layouts/full-layout.module';

const ROUTES: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
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
    AboutComponent,
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    FullLayoutModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
