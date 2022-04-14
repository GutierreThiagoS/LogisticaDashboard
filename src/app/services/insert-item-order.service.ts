import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertItemOrderService {

  private host = 'http://192.168.203.119:9191/orderpicking/all_orders_to_items'

  constructor(private http: HttpClient) { }

  getAllOrdersUsers(): Observable<any> {
    return this.http.get<any>(this.host)
  }
}
