import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title            = 'Users control';
  displayedColumns = ['id', 'photo', 'role', 'login', 'name', 'tel'];
  dataSource;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.userService.getAll().subscribe(data => {
      this.dataSource.data = data;
    });
  }
}
