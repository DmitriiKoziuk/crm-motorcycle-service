import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';

import { UserRecord } from '../../../shared/records/user.record';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [UserRecord],
})
export class UserListComponent implements OnInit {
  title            = 'User list';
  displayedColumns = ['id', 'photo', 'role', 'login', 'name', 'tel', 'actions'];
  dataSource;

  constructor(
    private activeRoute: ActivatedRoute,
    public  userRecord:  UserRecord,
  ) {}

  ngOnInit() {
    this.dataSource      = new MatTableDataSource();
    this.dataSource.data = [];

    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.userRecord.findWhere(params).then(data => {
        this.dataSource.data = data;
      });
    });
  }
}
