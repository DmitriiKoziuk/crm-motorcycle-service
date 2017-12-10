import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from './api.service';
import { User } from '../models/user';
import { DebugService } from './debug.service';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {

  private data: User|null = null;
  private storageName     = 'userData';

  constructor(private apiService: ApiService, private router: Router, private authService: AuthService) {
    if (window.localStorage.getItem(this.storageName)) {
      this.loadFromLocalStorage();
    }
  }

  can(permissionName) {
    return this.data.permissions.hasOwnProperty(permissionName);
  }

  getAll() {
    return this.apiService.get('user');
  }

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
        this.authService.setAccessToken(this.data.access_token);
        this.saveToLocalStorage();
        DebugService.Log(this.data);
        this.router.navigate(['/']);
        return null;
      } else {
        return data['error'];
      }
    });

    return null;
  }

  logOut() {
    this.removeFromLocalStorage();
    this.data = null;
    this.router.navigate(['/login']);
  }

  checkStatus() {
    if (this.data) {
      this.apiService.post('login/check', {
        'username': this.data.username,
        'access_token': this.data.access_token,
      }).subscribe((data) => {
        if (data['error']) {
          this.removeFromLocalStorage();
          this.router.navigate(['/login']);
        }
      });
    }
  }

  protected saveToLocalStorage() {
    window.localStorage.setItem(this.storageName, JSON.stringify(this.data));
  }

  protected loadFromLocalStorage() {
    if (window.localStorage.getItem(this.storageName)) {
      this.data = JSON.parse(window.localStorage.getItem(this.storageName));
      this.authService.setAccessToken(this.data.access_token);
      this.checkStatus();
    }
  }

  protected removeFromLocalStorage() {
    if (window.localStorage.getItem(this.storageName)) {
      window.localStorage.removeItem(this.storageName);
    }
  }
}