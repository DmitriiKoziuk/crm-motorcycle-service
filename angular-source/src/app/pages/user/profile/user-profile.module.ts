import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {path: '', component: UserProfileComponent},
];

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class UserProfileModule {}
