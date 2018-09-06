import { VehicleTypeDataModel } from './vehicle-type.data-model';
import { VehicleBrandDataModel } from './vehicle-brand.data-model';

export class VehicleDataModel {
  id:         number;
  type:       VehicleTypeDataModel;
  brand:      VehicleBrandDataModel;
  model_name: string;
}