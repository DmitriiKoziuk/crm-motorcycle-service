export class User {
  id: number|string;
  access_token: string;
  username: string;

  profile: {
    first_name: string,
    family_name: string,
    middle_name: string,
    photo: string,
    telephone_number: string,
  };

  role: {
    name: string,
  };

  permissions: {};
}
