import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientListModule } from './list/client-list.module';
import { ClientListComponent } from './list/client-list.component';

const ROUTES: Routes = [
  {path: '', component: ClientListComponent},
  {path: 'create', loadChildren: './create/client-create.module#ClientCreateModule'},
  {path: ':id', loadChildren: './create/client-create.module#ClientCreateModule'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES),
    ClientListModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class ClientModule {}
