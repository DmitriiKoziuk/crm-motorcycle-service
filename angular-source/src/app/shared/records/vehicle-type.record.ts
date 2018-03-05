import { ActiveRecord } from './active.record';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class VehicleTypeRecord extends ActiveRecord {
  minLength = 1;
  maxLength = 15;

  attributes = new FormGroup({
    id:   new FormControl(''),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength),
    ]),
  });

  getUrl() {
    return '/vehicle/type';
  }
}
