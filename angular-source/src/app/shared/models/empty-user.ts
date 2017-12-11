import { User } from './user';

export class EmptyUser extends User {
  id           = '';
  access_token = '';
  username     = '';

  profile = {
    first_name:       '',
    family_name:      '',
    middle_name:      '',
    photo:            '',
    telephone_number: '',
  };

  role = {
    name: '',
  };

  permissions = {};
}
