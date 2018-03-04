import {ActiveRecord} from './active.record';

export class ActionLogRecord extends ActiveRecord {
  getUrl() {
    return 'action-log';
  }
}
