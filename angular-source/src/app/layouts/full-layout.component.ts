import { Component } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent {

  constructor() { }

  isCollapsed     = false;
  isSidebarActive = false;

  collapsed(event: any): void {
    console.log(event);
  }

  expanded(event: any): void {
    console.log(event);
  }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }
}
