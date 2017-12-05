import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

  protected apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://api.' + window.location.hostname + '/v1/';
  }

  get(url: string) {
    return this.http.get(this.setUrl(url));
  }

  post(url: string, data: {}) {
    return this.http.post(this.setUrl(url), data);
  }

  put(url: string, data: {}) {
    return this.http.put(this.setUrl(url), data);
  }

  protected setUrl(url: string) {
    let urlString = '';
    if (! environment.production) {
      urlString = this.apiUrl + url;
    } else {
      urlString = this.apiUrl + url + '?XDEBUG_SESSION_START=debug';
    }
    return urlString;
  }
}
