import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  title = 'User list';
  displayedColumns = ['id', 'photo', 'role', 'login', 'name', 'tel', 'actions'];
  dataSource;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.authService.getAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }
}
