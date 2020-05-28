import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private world_clock_api_url = "http://worldclockapi.com/api/json/est/now";

  constructor(private http: HttpClient) { }

  public getTrueTimeEST(): Observable<Object> {
    return this.http.get<Object>(this.world_clock_api_url).pipe(
      map(response => response)
    );
  }
}
