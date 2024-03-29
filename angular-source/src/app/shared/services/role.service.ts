import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable()
export class RoleService {
  constructor(private apiService: ApiService) {}

  getAll() {
    return this.apiService.get('role');
  }
}
