import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subcuenta } from 'src/app/models/subcuenta.model';
import { URL_SERVICIOS } from 'src/app/config/config';
import { ActivationEnd } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { format } from 'url';

/**
 * Services for request with serve - Subcuentas
 */

@Injectable({
  providedIn: 'root'
})
export class SubcuentasService {


  /**
   * Constructor subgrupo services
   * 
   * @param http Service HttpClient
   */
  constructor(private http: HttpClient) { }

  /**
   * Load accounting account for identifier
   * 
   * @param id Ide
   */
  public getSubcuenta(id:string){
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/subcuenta/${id}?token=${token}`;
    return this.http.get(url);
  }

  /**
   * Get accounting accounts
   * 
   * @param name Name  account
   * @param subcuenta Number account
   * @param orderSubcuenta Order by number account
   * @param orderName Order by name account
   */

  public getSubcuentas(name:String,subcuenta:number, orderSubcuenta:number, orderName:number) {
    let token = localStorage.getItem('token');
    if (subcuenta===null) {
      subcuenta = 0;
    }
    let url = URL_SERVICIOS + `/subcuenta?name=${name}&subcuenta=${subcuenta}&orderSubcuenta=${orderSubcuenta}&orderName=${orderName}&token=${token}`;
    return  this.http.get(url);
  }

  /**
   * Create or update subaccount
   * 
   * @param subcuenta Subcuenta model 
   */
  public saveSubcuenta(subcuenta:Subcuenta) {
      let token = localStorage.getItem('token');
      if (subcuenta._id) {
        let url = URL_SERVICIOS + `/subcuenta/${subcuenta._id}?token=${token}`;
        return this.http.put(url, subcuenta);
      } else {
        let url = URL_SERVICIOS + `/subcuenta?token=${token}`;
        return this.http.post(url,subcuenta);
      }
  }

  public deleteSubcuenta(id:String) {
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/subcuenta/${id}?token=${token}`;
    return this.http.delete(url);
  }



}


