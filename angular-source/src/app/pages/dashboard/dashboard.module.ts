import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class DashboardModule {}
