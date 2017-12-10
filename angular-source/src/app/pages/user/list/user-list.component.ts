import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  title = 'User list';
  displayedColumns = ['id', 'photo', 'role', 'login', 'name', 'tel', 'actions'];
  dataSource;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.userService.getAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }
}
