import { GetResponse } from './get.response';
import { ActionLogModel } from '../models/action-log.model';

export class ActionLogGetResponse extends GetResponse {
  results: ActionLogModel[];
}
