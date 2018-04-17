import { GetResponse } from './get.response';

export class VehicleGetResponse extends GetResponse {
  results: {
    id:         number;
    type:       string;
    brand_name: string;
    model_name: string;
  }[];
}
