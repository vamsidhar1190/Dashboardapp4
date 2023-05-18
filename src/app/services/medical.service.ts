import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recentusers } from '../interfaces/recentusers';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class MedicalService {
  public recentUsers:string='./assets/data/recent-users.json';
  constructor(private httpClientRef:HttpClient) { }

  public onRecentUsers():Observable<Recentusers[]>{
    return this.httpClientRef.get<Recentusers[]>(this.recentUsers)
   }
}
