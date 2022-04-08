import { Injectable } from '@angular/core';

import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseWorkers } from '../models/response/response-workers'
import { ResponseWorkersStatistics } from '../models/response/response-workers-statistics'

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  private host  = 'http://192.168.203.119:9191/orderpicking/ga_user_workers'
  private host_workers  = 'http://192.168.203.119:9191/orderpicking/workers'

  constructor(private http: HttpClient) { }

  public asyncUsersAndOrder(): Observable<ResponseWorkers> {
    return this.http.get<ResponseWorkers>(this.host)
  }

  public asyncWorkersStatistics(): Observable<ResponseWorkersStatistics> {
    return this.http.get<ResponseWorkersStatistics>(this.host_workers)
  }
  
}
