import { ActiveRecord } from './active.record';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export class ClientRecord extends ActiveRecord {
  public minLength = 1;
  public maxLength = 45;

  attributes = new FormGroup({
    id:          new FormControl(''),
    first_name:  new FormControl('', [
      Validators.required,
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength),
    ]),
    family_name: new FormControl('', [
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength),
    ]),
    middle_name: new FormControl('', [
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength),
    ]),
    telephones: new FormArray([]),
  });

  getUrl() {
    return '/client';
  }
}
