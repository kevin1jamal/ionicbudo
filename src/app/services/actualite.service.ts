import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  
  constructor(private httpClient: HttpClient) { }

  getact(){
    return this.httpClient.get(`http://localhost:8080/api/coifure`);
  }
  getCoiffureById(id: number): Observable<any> {
    const urli = `http://localhost:8080/api/coiffure/${id}`;
    console.log("appel du service getone");
    return this.httpClient.get(urli)
  }
}
