import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  links = [
    {name: 'dashboard', url: ['/dashboard'], permissionName: 'seeDashboardPage', iconName: 'desktop'},
    {name: 'users', url: ['/user'], permissionName: 'seeUserControlPage', iconName: ''},
  ];

  constructor(public authService: AuthService) { }
}
