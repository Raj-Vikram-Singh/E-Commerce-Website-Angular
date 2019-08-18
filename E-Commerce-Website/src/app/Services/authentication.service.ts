import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _loginUrl = '/login';


  constructor(private http: HttpClient, private _router: Router) { }


  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
