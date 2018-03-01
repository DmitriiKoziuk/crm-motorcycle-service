import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Role } from '../../../shared/models/role';
import { RoleService } from '../../../shared/services/role.service';
import { UserRecord } from '../../../shared/records/user.record';
import { PageTitleService } from '../../../shared/services/page-title.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.components.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  roles: Role[];

  constructor(
    private activeRoute: ActivatedRoute,
    private roleService: RoleService,
    private pageTitle:   PageTitleService,
    public  userRecord:  UserRecord,
  ) {}

  ngOnInit() {
    this.roleService.getAll().subscribe((data) => {
      this.roles = <Role[]>data;
    });

    this.activeRoute.params.subscribe((params: Params) => {
      this.userRecord.loadIn(params['id']).then(someData => {
        this.initSomeData();
      });
    });
  }

  initSomeData() {
    this.pageTitle.set('Edit user' + ` - ${this.userRecord.getAttribute('username')}`);
  }
}
