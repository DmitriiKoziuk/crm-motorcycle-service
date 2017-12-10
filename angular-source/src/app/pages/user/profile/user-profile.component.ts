import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/user';
import { EmptyUser } from '../../../shared/models/empty-user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.components.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  title = 'Edit user';
  user: User;
  form: FormGroup;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.user = new EmptyUser();

    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      profile:  new FormGroup({
        first_name:       new FormControl(''),
        family_name:      new FormControl(''),
        middle_name:      new FormControl(''),
        telephone_number: new FormControl(''),
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
