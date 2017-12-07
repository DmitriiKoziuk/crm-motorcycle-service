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
    return this.data;
  }

  login(username: string, password: string) {
    this.apiService.post('login', {
      'username': username,
      'password': password
    }).subscribe((data) => {
      DebugService.Log(data);
      if (!data['error']) {
        this.data = new User();
        this.data = <User>data;
        DebugService.Log(this.data);
        this.router.navigate(['/']);
        return null;
      } else {
        return data['error'];
      }
    });

    return null;
  }
}
