import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/user';
import { EmptyUser } from '../../../shared/models/empty-user';
import { RoleService } from '../../../shared/services/role.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.components.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  title = 'Edit user';
  user: User;
  form: FormGroup;
  roles;

  constructor(
    private userService: UserService,
    private route:       ActivatedRoute,
    private roleService: RoleService,
  ) {}

  ngOnInit() {
    this.user = new EmptyUser();

    this.roleService.getAll().subscribe((data) => {
      this.roles = data;
    });

    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
      role:     new FormControl('', [
        Validators.required
      ]),
      profile:  new FormGroup({
        first_name:       new FormControl('', [
          Validators.required
        ]),
        family_name:      new FormControl(''),
        middle_name:      new FormControl(''),
        telephone_number: new FormControl('', [
          Validators.required
        ]),
      }),
    });

    this.route.params.subscribe((params: Params) => {
      this.userService.getUser(+params['id']).subscribe((data) => {
        this.user = <User>data;
        this.initSomeData();
      });
    });
  }

  initSomeData() {
    this.title += ` - ${this.user.profile.first_name}`;
  }
}
