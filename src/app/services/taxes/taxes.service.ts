import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tax } from 'src/app/models/tax.model';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Porcentaje } from 'src/app/models/porcentaje.model';
/**
 * Services for requests with serve - Taxes
 */
@Injectable({
  providedIn: 'root'
})
export class TaxesService {
  
  /**
   * Constructor subgrupo services
   * 
   * @param http Service HttpClient
   */
  constructor(private http:HttpClient) { }

  /**
   * Get taxes
   */
  public getTaxes(){
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/tax?token=${token}`;
    return this.http.get(url);
  }



  /**
   * Create or update tax
   * 
   * @param tax Tax model
   */
  public saveTax(tax:Tax) {
    let token = localStorage.getItem('token');

    if (tax._id) {
      let url = URL_SERVICIOS + `/tax/${tax._id}?token=${token}`;
      return this.http.put(url,tax);
    } else {
      let url = URL_SERVICIOS + `/tax?token=${token}`;
      return this.http.post(url,tax);
    }
  }
  /**
   * Create percentage
   * 
   * Creación porcentajes de impuesto
   * 
   * @param id Identify tax
   * @param porcentaje Percentage
   * @returns 
   */
  public savePorcentaje(id:String, porcentaje:Porcentaje) {
    let token = localStorage.getItem('token');
    if (porcentaje._id) {
      let url = URL_SERVICIOS + `/tax/${id}/porcentajes/${porcentaje._id}?token=${token}`;
      return this.http.put(url,porcentaje);
    } else {
      let url = URL_SERVICIOS + `/tax/${id}/porcentajes?token=${token}`;
      return this.http.post(url,porcentaje);
    }
  }

  public deletePorcentaje(id:String, idpor:String) {
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/tax/${id}/porcentajes/${idpor}?token=${token}`;
    return this.http.delete(url);
  }


}
