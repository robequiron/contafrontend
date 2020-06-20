import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cuenta } from 'src/app/models/cuenta.model';
import { URL_SERVICIOS } from 'src/app/config/config';
import { CuentaPipe } from 'src/app/pipes/cuenta.pipe';
/**
 * Services for request with serve - Cuentas
 */

@Injectable({
  providedIn: 'root',

})

export class CuentasService {

  /**
   * Constructor cuenta services
   * 
   * @param http 
   */
  constructor(
    private http:HttpClient,
    private cuentapipes:CuentaPipe
    ) { }

  /**
   * Get accounting account
   * 
   * @param name Name account
   * @param cuenta Number account
   * @param orderCuenta Order account
   * @param orderName Order Name
   */
  public getCuentas(name:String, cuenta:number, orderCuenta:number, orderName:number){
    let token = localStorage.getItem('token');
    let cuentamax: number;
    if (cuenta===null) {
      cuenta=0;
      cuentamax = 99999999;
    } else {
      cuentamax = this.cuentapipes.transform(cuenta,[1]);
      cuenta = this.cuentapipes.transform(cuenta,[0]);
    }
    let url = URL_SERVICIOS + `/cuenta?name=${name}&cuenta=${cuenta}&cuentamax=${cuentamax}&orderCuenta=${orderCuenta}&orderName=${orderName}&token=${token}`;
    return this.http.get(url);
  }


  /**
   * Load account for identifier
   * 
   * @param id Identifier acount
   */  
  public getCuenta(id:String) {
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/cuenta/${id}?token=${token}`;
    return this.http.get(url);
  }


  /**
   * Create or update accounting account
   * 
   * @param cuenta: Accounting account
   */
  public saveCuenta(cuenta:Cuenta) {
    let token = localStorage.getItem('token');

    if (cuenta._id){
      let url = URL_SERVICIOS + `/cuenta/${cuenta._id}?token=${token}`;
      return this.http.put(url, cuenta);
    } else {
      let url = URL_SERVICIOS + `/cuenta?token=${token}`;
      return this.http.post(url,cuenta);
    }

  }
  
  /**
   * Delete accounting account
   * 
   * @param id Identifier accounting account
   */
  public deleteCuenta(id:string) {
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/cuenta/${id}?token=${token}`;
    return this.http.delete(url);
  }

  


}
