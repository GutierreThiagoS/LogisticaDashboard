import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestRegisterWorker } from '../models/request/request-register-worker';
import { ResponseInfo } from '../models/response/response-info';

@Injectable({
  providedIn: 'root'
})
export class RegisterWorkerService {

  private host  = 'http://192.168.203.119:9191/orderpicking/register_worker'

  constructor(private http: HttpClient) { }


  public SyncRegisterWorker(request: RequestRegisterWorker): Observable<ResponseInfo> {
    return this.http.post<ResponseInfo>(this.host, request)
  }
}
