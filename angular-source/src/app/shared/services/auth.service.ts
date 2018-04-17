import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from './api.service';
import { AccessTokenService } from './access-token.service';
import { DebugService } from './debug.service';

import { User } from '../models/user';

@Injectable()
export class AuthService {

  private loggedInUser: User|null = null;
  private storageName             = 'loggedInUser';

  constructor(
    private apiService:  ApiService,
    private accessToken: AccessTokenService,
    private router:      Router,
  ) {
    if (window.localStorage.getItem(this.storageName)) {
      this.loadFromLocalStorage();
    }
  }

  isLoggedInUserCan(permissionName) {
    return this.loggedInUser.permissions.hasOwnProperty(permissionName);
  }

  isUserLoggedIn() {
    return this.loggedInUser;
  }

  login(username: string, password: string) {
    this.apiService.post('login', {
      'username': username,
      'password': password
    }).subscribe((data) => {
      DebugService.Log(data);
      if (!data['error']) {
        this.loggedInUser = new User();
        this.loggedInUser = <User>data;
        this.accessToken.set(this.loggedInUser.access_token);
        this.saveToLocalStorage();
        DebugService.Log(this.loggedInUser);
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
    this.loggedInUser = null;
    this.router.navigate(['/login']);
  }

  checkStatus() {
    if (this.loggedInUser) {
      this.apiService.post('login/check', {
        'username': this.loggedInUser.username,
        'access_token': this.loggedInUser.access_token,
      }).subscribe((data) => {
        if (data['error']) {
          this.removeFromLocalStorage();
          this.router.navigate(['/login']);
        }
      });
    }
  }

  protected saveToLocalStorage() {
    window.localStorage.setItem(this.storageName, JSON.stringify(this.loggedInUser));
  }

  protected loadFromLocalStorage() {
    if (window.localStorage.getItem(this.storageName)) {
      this.loggedInUser = JSON.parse(window.localStorage.getItem(this.storageName));
      this.accessToken.set(this.loggedInUser.access_token);
      this.checkStatus();
    }
  }

  protected removeFromLocalStorage() {
    if (window.localStorage.getItem(this.storageName)) {
      window.localStorage.removeItem(this.storageName);
    }
  }
}
