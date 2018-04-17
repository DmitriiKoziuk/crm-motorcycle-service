import { GetResponse } from './get.response';
import { ClientVehicleModel } from '../models/client-vehicle.model';

export class ClientGetResponse extends GetResponse {
  results: ClientVehicleModel[];
}
