import { GetResponse } from './get.response';
import { VehicleRecord } from '../records/vehicle.record';
import { VehicleDataModel } from '../date-models/vehicle.data-model';

export class VehicleGetResponse extends GetResponse {
  results: VehicleRecord[] | VehicleDataModel[];
}
