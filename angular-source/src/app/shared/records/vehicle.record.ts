import { ActiveRecord } from './active.record';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class VehicleRecord extends ActiveRecord {
  maxLength = 150;

  attributes = new FormGroup({
    id:   new FormControl(''),
    type: new FormGroup({
      id:   new FormControl(''),
      name: new FormControl('', [
        Validators.required,
      ]),
    }),
    brand: new FormGroup({
      id:   new FormControl(''),
      name: new FormControl('', [
        Validators.required,
      ]),
    }),
    model_name: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(this.maxLength),
    ]),
  });

  public getUrl() {
    return '/vehicle';
  }

  getFullName(): string {
    return this.getAttribute('type.name') + ' ' +
      this.getAttribute('brand.name') + ' ' +
      this.getAttribute('model_name');
  }
}
