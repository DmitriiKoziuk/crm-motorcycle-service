import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FullLayoutComponent } from './full-layout.component';
import { MaterialModule } from '../shared/modules/material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    FullLayoutComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    AngularFontAwesomeModule,
    CollapseModule,
  ],
})
export class FullLayoutModule {}
