import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './list/user-list.component';
import { UserListModule } from './list/user-list.module';

const ROUTES: Routes = [
  {path: '', component: UserListComponent},
  {path: ':id', loadChildren: './profile/user-profile.module#UserProfileModule'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES),
    UserListModule,
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule {}
