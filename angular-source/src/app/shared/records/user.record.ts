import { ActiveRecord } from './active.record';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class UserRecord extends ActiveRecord {
  public minLength = 5;
  public maxLength = 10;

  attributes = new FormGroup({
    id:           new FormControl(''),
    access_token: new FormControl(''),
    username:     new FormControl('', [
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength),
      Validators.required,
    ]),
    password:     new FormControl('', [
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength),
    ]),
    profile:      new FormGroup({
      first_name:       new FormControl('', [
        Validators.required,
      ]),
      family_name:      new FormControl(''),
      middle_name:      new FormControl(''),
      photo:            new FormControl(''),
      telephone_number: new FormControl('', [
        Validators.minLength(13),
        Validators.maxLength(13),
        Validators.required,
      ]),
    }),
    role: new FormGroup({
      name: new FormControl(''),
    }),
    permissions: new FormGroup({}),
  });

  getUrl() {
    return '/user';
  }
}
