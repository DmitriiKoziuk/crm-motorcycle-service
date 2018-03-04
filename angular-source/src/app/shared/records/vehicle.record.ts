import { ActiveRecord } from './active.record';

export class VehicleRecord extends ActiveRecord {
  public getUrl() {
    return 'vehicle';
  }
}
