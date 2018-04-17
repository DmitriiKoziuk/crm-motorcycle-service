import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list-search-from',
  templateUrl: './user-list-search-form.component.html',
  styleUrls: ['./user-list-search-form.component.css']
})
export class UserListSearchFormComponent implements OnInit {
  form = new FormGroup({
    username:         new FormControl(''),
    first_name:       new FormControl(''),
    family_name:      new FormControl(''),
    telephone_number: new FormControl(''),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:         Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.form.patchValue(params);
    });
  }

  search() {
    this.router.navigate(['/user'], {queryParams: this.form.getRawValue()});
  }

  reset() {
    this.form.reset();
    this.router.navigate(['/user']);
  }
}
