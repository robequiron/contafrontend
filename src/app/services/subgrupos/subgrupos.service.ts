import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Subgrupo } from 'src/app/models/subgrupo.model';
/**
 * Services for requests with serve - Subgrupos
 */
@Injectable({
  providedIn: 'root'
})
export class SubgruposService {

  /**
   * Constructor subgrupo services
   * 
   * @param http Service HttpClient
   */

  constructor(private http: HttpClient) { }

  /**
   * Get accountings subgroups
   */
  public getSubgrupos(name:String,orderSubgrupo:number,orderName:number){
    let token= localStorage.getItem('token');
    let url = URL_SERVICIOS + `/subgrupo?name=${name}&orderSubgrupo=${orderSubgrupo}&orderName=${orderName}&token=${token}`;
    return this.http.get(url);
  }

  /**
   * Get accounting subgroup
   * 
   * @param id Identifier subgroup
   */
  public getSubgrupo(id:String) {
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/subgrupo/${id}?token=${token}`;
    return this.http.get(url);
  }
  /**
   * Get registration by accounting subgroup
   * 
   * @param subgrupo Identifier number subgroup
   */
  public getFindGroup(subgrupo:number) {
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/subgrupo/subgrupo?subgrupo=${subgrupo}&token=${token}`;
    return this.http.get(url);
  }

  /**
   * Create or update accounting subgroup 
   * 
   * @param subgrupo Subgrupo model
   */
  public saveSubgrupo(subgrupo:Subgrupo){
    let token= localStorage.getItem('token');

    if(subgrupo._id) {
      let url = URL_SERVICIOS + `/subgrupo/${subgrupo._id}?token=${token}`
      return this.http.put(url,subgrupo);
    } else {
      let url = URL_SERVICIOS + `/subgrupo?token=${token}`;
      return this.http.post(url,subgrupo);
    }
  
  }

  /**
   * Delete accounting subgroup
   * 
   * @param id Identify subgroup
   */
  public deleteSubgrupo(id:String){
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/subgrupo/${id}?token=${token}`;
    return this.http.delete(url);
  }



}
