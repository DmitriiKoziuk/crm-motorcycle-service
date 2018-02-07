import { ActiveRecord } from './active.record';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class UserRecord extends ActiveRecord {
  attributes = new FormGroup({
    id:           new FormControl(''),
    access_token: new FormControl(''),
    username:     new FormControl(''),
    password:     new FormControl('', [
      Validators.maxLength(5),
      Validators.maxLength(10),
    ]),
    profile:      new FormGroup({
      first_name:       new FormControl('', [
        Validators.required
      ]),
      family_name:      new FormControl(''),
      middle_name:      new FormControl(''),
      photo:            new FormControl(''),
      telephone_number: new FormControl(''),
    }),
    role: new FormGroup({
      name: new FormControl(''),
    }),
    permissions: new FormGroup({}),
  });

  getUrl() {
    return 'user';
  }
}
