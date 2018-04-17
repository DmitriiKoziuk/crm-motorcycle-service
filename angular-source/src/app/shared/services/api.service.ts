import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { AccessTokenService } from './access-token.service';

@Injectable()
export class ApiService {

  protected apiUrl: string;

  constructor(
    private http:        HttpClient,
    private accessToken: AccessTokenService,
    private router:      Router
  ) {
    this.apiUrl = 'http://api.' + window.location.hostname + '/v1';
  }

  get(url: string, params = {}) {
    return this.http.get(this.setUrl(url, params), {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.accessToken.get()}`),
    });
  }

  post(url: string, data: {}) {
    return this.http.post(this.setUrl(url), data, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.accessToken.get()}`),
    });
  }

  put(url: string, data: {}) {
    return this.http.put(this.setUrl(url), data, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.accessToken.get()}`),
    });
  }

  protected setUrl(url: string, params = {}) {
    const queryParams = {};

    Object.keys(params).forEach(name => {
      queryParams[name] = params[name];
    });

    if (! environment.production) {
      queryParams['XDEBUG_SESSION_START'] = 'debug';
    }

    return this.apiUrl + this.router
      .createUrlTree([url], {queryParams: queryParams})
      .toString();
  }
}
