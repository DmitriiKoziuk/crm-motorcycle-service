import { GetResponse } from '../get.response';

export class VehicleTypeGetResponse extends GetResponse {
  results: {
    id:   number,
    name: string,
  }[];
}
