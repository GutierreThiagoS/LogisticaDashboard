import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { ResponseAllWorker } from '../models/response/response-all-worker'
import { RequestCreateOrder } from '../models/request/request-create-order'
import { ResponseInfo } from '../models/response/response-info';

@Injectable({
  providedIn: 'root'
})
export class RegisterOrderService {

  private host  = 'http://192.168.203.119:9191/orderpicking/all_workers_to_order'
  private hostCreate  = 'http://192.168.203.119:9191/orderpicking/create_order'

  constructor(private http: HttpClient) { 

  }

  public getWorders(): Observable<ResponseAllWorker> {
    return this.http.get<ResponseAllWorker>(this.host);
  }
  
  public createOrder(request: RequestCreateOrder) : Observable<ResponseInfo> {
    return this.http.post<ResponseInfo>(this.hostCreate, request)
  }
}
