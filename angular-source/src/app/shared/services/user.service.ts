import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from './api.service';
import { User } from '../models/user';
import { DebugService } from './debug.service';

@Injectable()
export class UserService {

  private data: User|null = null;

  constructor(private apiService: ApiService, private router: Router) { }

  isLoggedIn() {
    if (this.data) {
      return true;
    } else {
      return false;
    }
  }

  login(username: string, password: string) {
    this.apiService.post('login', {
      'username': username,
      'password': password
    }).subscribe((data) => {
      this.data             = new User();
      this.data.accessToken = data['access-token'];
      DebugService.Log(this.data);
      this.router.navigate(['/']);
    });
  }
}
