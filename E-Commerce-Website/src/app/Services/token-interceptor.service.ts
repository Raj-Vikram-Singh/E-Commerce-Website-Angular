import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _auth: AuthenticationService) { }

  intercept(req, next) {

    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${(this._auth.getToken())}`
      }
    });
    return next.handle(tokenizedReq);
  }

}
