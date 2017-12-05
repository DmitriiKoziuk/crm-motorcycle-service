import { environment } from '../../../environments/environment';

export class DebugService {
  static Log(message: any) {
    if (! environment.production) {
      console.log(message);
    }
  }
}
