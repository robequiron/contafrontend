import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Grupo } from 'src/app/models/grupo.model';
import { map } from 'rxjs/operators';

/**
 * Services for requests with server - Grupos
 */
@Injectable({
  providedIn: 'root'
})
export class GruposService {

  /**
   * Constructor grupo services
   * 
   * @param http Service HttpClient
   */
  constructor(private http:HttpClient) { }

  /**
   * Get accounting group
   * 
   * @param name Accounting group
   */
  public getGrupos(name:String, orderGrupo:number,orderName:number){
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/grupo?name=${name}&orderName=${orderName}&orderGrupo=${orderGrupo}&token=${token}`;
    return this.http.get(url);
  }

  /**
   * Load accounting group for identifier
   * 
   * @param id Identify group
   */
  public getGrupo(id:String) {
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/grupo/${id}?token=${token}`;
    return this.http.get(url).pipe(
      map( (resp:any)=>{
        return resp.grupo;
      })
    )
  }

  /**
   * Get registration by accounting group
   * 
   * @param grupo Identifier number group
   */
  public getFindGroup(grupo:number) {
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/grupo/grupo?grupo=${grupo}&token=${token}`;
    return this.http.get(url);
  }

  /**
   * Create or update accounting group
   * 
   * @param grupo Accounting group
   */

  public saveGrupo(grupo:Grupo) {
    let token= localStorage.getItem('token');
    
    if (grupo._id) {
      let url = URL_SERVICIOS + `/grupo/${grupo._id}?token=${token}`;
      return this.http.put(url,grupo);
    } else {
      let url = URL_SERVICIOS + `/grupo?token=${token}`;
      return this.http.post(url, grupo);
    }
  }
  /**
   * Delete accounting group
   * 
   * @param id Identifer accounting group
   */

  public deleteGrupo(id:string) {
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/grupo/${id}?token=${token}`;
    return this.http.delete(url);
  }

}
