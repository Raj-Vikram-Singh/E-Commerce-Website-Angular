import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  _baseUrl = environment._baseUrl;
  private _loginUrl = this._baseUrl + 'login';

  private messageSource = new BehaviorSubject(false);
  isLoggedIn = this.messageSource.asObservable();


  constructor(private http: HttpClient, private _router: Router) { }


  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.messageSource.next(false);
    this._router.navigate(['/']);
  }

  loggedIn() {

    if (!!localStorage.getItem('token')) {
      this.messageSource.next(true);
      return true;
    } else {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
