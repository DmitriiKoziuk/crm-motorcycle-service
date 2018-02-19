import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../services/api.service';
import { isObject } from 'util';

@Injectable()
export class ActiveRecord {
  attributes = new FormGroup({
    id: new FormControl(''),
  });

  constructor(protected api: ApiService) {}

  getUrl() {
    return '';
  }

  getAttribute(path: string) {
    return this.attributes.get(path).value;
  }

  setAttribute(name, value) {
    this.attributes.get(name).setValue(value);
  }

  setAttributes(attributes: {}, parentControlName = '') {
    for (const key in attributes) {
      if (attributes.hasOwnProperty( key )) {
        const fullControlName  = (parentControlName === '' ? key : parentControlName + '.' + key);
        const localControlName = (parentControlName === '' ? key : parentControlName);
        const isExist          = this.attributes.get(fullControlName);
        if (isExist === null) {
          const addTo = <FormGroup>this.attributes.get(localControlName);

          if (isObject( attributes[ key ] )) {
            addTo.addControl(key,  new FormGroup({}));
            this.setAttributes(attributes[ key ], fullControlName);
          } else {
            addTo.addControl(key,  new FormControl(''));
          }
        }

        if (isObject(attributes[ key ])) {
          this.setAttributes(attributes[ key ], fullControlName);
        } else {
          this.setAttribute(fullControlName, attributes[ key ]);
        }
      }
    }
  }

  loadIn(id: string) {
    return new Promise((resolve, reject) => {
      this.api.get(this.getUrl() + '/' + id).subscribe((data) => {
        if (data['error']) {
          reject(data);
        } else {
          this.setAttributes(data);
          resolve('ok');
        }
      });
    });
  }

  getById(id: number) {
    return new Promise((resolve, reject) => {
      this.api.get(this.getUrl() + '/' + id).subscribe((data) => {
        if (data['error']) {
          reject(data['error']);
        } else {
          const object = new (<any>this.constructor);
          object.setAttributes(data);
          resolve(object);
        }
      });
    });
  }

  isNewRecord() {
    return (this.attributes.get('id').value === '');
  }

  save() {
    if (this.isNewRecord()) {
      console.log(this.attributes.getRawValue());
      this.api
        .post(this.getUrl(), this.attributes.getRawValue())
        .subscribe((response) => {
          console.log('put', this.attributes.getRawValue());
          console.log('response', response);
        });
    } else {
      this.api
        .put(this.getUrl() + '/' + this.attributes.get('id').value, this.attributes.getRawValue())
        .subscribe((response) => {
          console.log('post', this.attributes.getRawValue());
          console.log('response', response);
        });
    }
  }
}