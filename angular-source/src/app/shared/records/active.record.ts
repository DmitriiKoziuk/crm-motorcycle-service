import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

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

  getAttributeError(path: string) {
    if (this.attributes.get(path).valid) {
      return false;
    } else {
      let e = '';
      let m = '';
      for (const error in this.attributes.get(path).errors) {
        if (this.attributes.get(path).errors.hasOwnProperty(error)) {
          switch (error) {
            case 'required': m = 'Is required.'; break;
            case 'minlength': m = 'Must be at least ! characters long.'; break;
            case 'maxlength': m = 'Cannot be more than ! characters long.'; break;
            default: m = error; break;
          }
          e = (e === '' ? e + m : e + ', ' + m);
        }
      }
      return e;
    }
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
            if (addTo instanceof FormArray) {
              (<FormArray>addTo).push(new FormGroup({}));
            } else {
              addTo.addControl(key,  new FormGroup({}));
              this.setAttributes(attributes[ key ], fullControlName);
            }
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

  findWhere(params) {
    return new Promise((resolve, reject) => {
      this.api.get(this.getUrl(), params).subscribe((data) => {
        if (data['error']) {
          reject(data['error']);
        } else {
          resolve(data);
        }
      });
    });
  }

  isNewRecord() {
    return (this.attributes.get('id').value === '');
  }

  isAttributeValid(path: string) {
    return this.attributes.get(path).valid;
  }

  isAttributeNotValid(path: string) {
    return !this.isAttributeValid(path);
  }

  isAttributeChanged() {
    return this.attributes.dirty;
  }

  isAttributeNotChanged() {
    return ! this.isAttributeChanged();
  }

  isValid() {
    return this.attributes.valid;
  }

  isNotValid() {
    return !this.isValid();
  }

  save() {
    return new Promise((resolve, reject) => {
      if (this.attributes.valid) {
        if (this.isNewRecord()) {
          this.api
            .post(this.getUrl(), this.attributes.getRawValue())
            .subscribe((response) => {
              if (response['error']) {
                reject(response['error']);
              } else {
                resolve(response);
              }
            });
        } else {
          this.api
            .put(this.getUrl() + '/' + this.attributes.get('id').value, this.attributes.getRawValue())
            .subscribe((response) => {
              if (response['error']) {
                reject(response['error']);
              } else {
                resolve(response);
              }
            });
        }
      } else {
        reject({
          error: 'Attribute not valid'
        });
      }
    });
  }
}
