import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class ApiService {

  protected apiUrl: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.apiUrl = 'http://api.' + window.location.hostname + '/v1/';
  }

  get(url: string) {
    return this.http.get(this.setUrl(url), {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getAccessToken()}`),
    });
  }

  post(url: string, data: {}) {
    return this.http.post(this.setUrl(url), data, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getAccessToken()}`),
    });
  }

  put(url: string, data: {}) {
    return this.http.put(this.setUrl(url), data, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getAccessToken()}`),
    });
  }

  protected setUrl(url: string) {
    let urlString = '';
    if (environment.production) {
      urlString = this.apiUrl + url;
    } else {
      urlString = this.apiUrl + url + '?XDEBUG_SESSION_START=debug';
    }
    return urlString;
  }
}
