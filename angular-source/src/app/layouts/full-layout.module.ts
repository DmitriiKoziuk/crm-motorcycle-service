import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FullLayoutComponent } from './full-layout.component';
import { MaterialModule } from '../shared/modules/material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { CollapseModule } from 'ngx-bootstrap';
import { PageTitleService } from '../shared/services/page-title.service';

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
  providers: [
    PageTitleService,
  ],
})
export class FullLayoutModule {}
