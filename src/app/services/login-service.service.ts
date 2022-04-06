import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { RequestLogin } from '../models/request-login';
import { ResponseLogin } from '../models/response-login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private host  = 'http://192.168.203.119:9191/orderpicking/gaLogin'

  // EndPoints
  private endPointLogin: string = '/orderpicking/login'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': '*/*'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getLogin(request: RequestLogin): Observable<ResponseLogin> {
    console.log(request.email + "  " + request.password)
    console.log(" HOST - " + this.host)
    return this.http.post<ResponseLogin>(
        this.host,
        request
      )
      .pipe(
        tap( // Log the result or error
          {
            next: (data: any) => {
              console.log(data.user)
              return data
            },
            error: (error: any) => {
              return console.error(error)
            }
          }
        )
      )
  }
}
