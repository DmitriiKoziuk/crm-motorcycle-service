export class ActionLogModel {
  id:          number;
  user: {
    user_id:          number,
    first_name:       string,
    middle_name:      string,
    photo:            string,
    telephone_number: string,
  };
  entity_name: string;
  entity_id:   string;
  action_type: string;
  old_data:    string|{};
  new_data:    string|{};
  apply_time:  string;
}
