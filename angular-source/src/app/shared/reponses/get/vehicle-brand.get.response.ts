import { GetResponse } from '../get.response';

export class VehicleBrandGetResponse extends GetResponse {
  results: {
    id:   number,
    name: string,
  }[];
}