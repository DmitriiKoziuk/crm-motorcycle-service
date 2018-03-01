import { Component } from '@angular/core';

import { PageTitleService } from '../shared/services/page-title.service';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent {

  isSidebarActive = false;

  constructor(
    public pageTitle: PageTitleService
  ) { }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }
}
