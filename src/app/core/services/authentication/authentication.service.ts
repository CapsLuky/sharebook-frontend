﻿import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
const moment = require('moment-timezone');

import { UserService } from '../user/user.service';

import { APP_CONFIG, AppConfig } from '../../../app-config.module';
const { version } = require('package.json');

@Injectable()
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private _user: UserService,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}
  private _localStorageUserKey = 'shareBookUser';

  login(email: string, password: string) {
    const url = `${this.config.apiEndpoint}/Account/Login/`;
    const body = {
      email: email,
      password: password,
    };
    const headers = new HttpHeaders({
      'x-requested-with': 'web',
      'Client-Version': version,
    });
    const options = { headers: headers };

    return this.http.post<any>(url, body, options).pipe(
      map((response) => {
        // login successful if there's a jwt token in the response
        if (response.success || response.value.authenticated) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('shareBookUser', JSON.stringify(response.value));
          this._user.setLoggedUser(response.value);
        }

        return response.value;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(this._localStorageUserKey);
    this._user.setLoggedUser(null);
  }

  checkTokenValidity() {
    const user = JSON.parse(localStorage.getItem(this._localStorageUserKey));
    if (user) {
      const expiration = moment(user.expiration);
      const now = moment();
      if (now.isAfter(expiration)) {
        this.logout();
      }
    }
  }
}
