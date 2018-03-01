import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector:    'app-client-list-search-form',
  templateUrl: './client-list-search-form.component.html',
  styleUrls:   ['./client-list-search-form.component.css'],
})
export class ClientListSearchFormComponent implements OnInit {
  form = new FormGroup({
    id:               new FormControl(''),
    first_name:       new FormControl(''),
    family_name:      new FormControl(''),
    middle_name:      new FormControl(''),
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
    this.router.navigate(['/client'], {queryParams: this.form.getRawValue()});
  }

  reset() {
    this.form.reset();
    this.router.navigate(['/client']);
  }
}
