import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';

/**
 * Services for request with server - Ways
 */

@Injectable({
  providedIn: 'root'
})
export class ViasService {
  /**
   * Constructor way services
   * 
   * @param http Service HttpClient
   */
  constructor(private http:HttpClient) { }


  public getVias(nameSearch: string, orderName: number) {
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/via?name=${nameSearch}&orderName=${orderName}&token=${token}`;
    return this.http.get(url);
  }

}
