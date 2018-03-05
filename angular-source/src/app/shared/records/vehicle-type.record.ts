import { ActiveRecord } from './active.record';

export class VehicleTypeRecord extends ActiveRecord {
  getUrl() {
    return '/vehicle-type';
  }
}