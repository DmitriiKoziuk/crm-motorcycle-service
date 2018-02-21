import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { AccessTokenService } from './access-token.service';

@Injectable()
export class ApiService {

  protected apiUrl: string;

  constructor(
    private http:        HttpClient,
    private accessToken: AccessTokenService,
  ) {
    this.apiUrl = 'http://api.' + window.location.hostname + '/v1/';
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

    let queryParams = '';
    for (const key in params) {
      if (params.hasOwnProperty( key )) {
        queryParams += (queryParams === '' ? key + '=' + params[ key ] : '&' + key + '=' + params[ key ]);
      }
    }

    if (! environment.production) {
      queryParams += (queryParams === '' ? 'XDEBUG_SESSION_START=debug' : '&XDEBUG_SESSION_START=debug');
    }

    if ('' !== queryParams) {
      queryParams = '?' + queryParams;
    }

    let urlString = '';
    if ('' === queryParams) {
      urlString = this.apiUrl + url;
    } else {
      urlString = this.apiUrl + url + queryParams;
    }
    return urlString;
  }
}
