import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  public apiURL = '/Registrations' ;
  constructor( private httpClient: HttpClient) { }

  RegisterUser(user: any): Observable<any> {
    return this.httpClient.post(this.apiURL, user)
    .pipe(
      map(res => res),
       catchError( this.errorHandler)
      );
  }
  errorHandler(error: Response) {
    console.log(error);
    return throwError(error);
  }

}


