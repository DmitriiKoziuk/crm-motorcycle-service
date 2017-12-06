import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FullLayoutComponent } from './full-layout.component';
import { MaterialModule } from '../shared/modules/material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    FullLayoutComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    MaterialModule,
    RouterModule,
    AngularFontAwesomeModule,
  ],
})
export class FullLayoutModule {}
