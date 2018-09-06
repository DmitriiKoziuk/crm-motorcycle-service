import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { ActiveRecord } from './active.record';
import { VehicleRecord } from './vehicle.record';

@Injectable()
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
    vehicles:   new FormArray([]),
  });

  getUrl() {
    return '/client';
  }

  addVehicle(vehicle: VehicleRecord, vin: string, note: string): void {
    console.log('aV', vehicle);
    (<FormArray>this.attributes.get('vehicles')).push(
      new FormGroup({
        id:         new FormControl(vehicle.getAttribute('id')),
        type:       new FormControl(vehicle.getAttribute('type.name')),
        brand_name: new FormControl(vehicle.getAttribute('brand.name')),
        model_name: new FormControl(vehicle.getAttribute('model_name')),
        vin:        new FormControl(vin),
        note:       new FormControl(note),
      })
    );
    console.log(this.attributes.getRawValue());
  }
}
