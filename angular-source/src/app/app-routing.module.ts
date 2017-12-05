import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

const ROUTES: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: 'about', component: AboutComponent },
    ]
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
    ]
  },
];

@NgModule({
  declarations: [
    FullLayoutComponent,
    SimpleLayoutComponent,
    AboutComponent,
  ],
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
