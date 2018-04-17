import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';

import { UserRecord } from '../../../shared/records/user.record';
import { PageTitleService } from '../../../shared/services/page-title.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [UserRecord],
})
export class UserListComponent implements OnInit {
  displayedColumns = ['id', 'photo', 'role', 'login', 'name', 'tel', 'actions'];
  dataSource;

  constructor(
    private activeRoute: ActivatedRoute,
    private pageTitle:   PageTitleService,
    public  userRecord:  UserRecord,
  ) {}

  ngOnInit() {
    this.pageTitle.set('User list');

    this.dataSource      = new MatTableDataSource();
    this.dataSource.data = [];

    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.userRecord.findWhere(params).then(data => {
        this.dataSource.data = data;
      });
    });
  }
}
