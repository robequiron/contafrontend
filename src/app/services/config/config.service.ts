import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
/**
 * Services for requests with server - Config
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  //TODO:Establecer configuración general y por usuario

  /**
   * Item number config
   */
  public limit:number=5;
  /**
   * Config class table
   * 
   *     - Table				
   *     Available Table Classes:
   *     'table'             - basic table
   *     'table-bordered'    - table with full borders
   *     'table-borderless'  - table with no borders
   *     'table-striped'     - striped table
   *     'table-condensed'   - table with smaller top and bottom cell padding
   *     'table-hover'       - rows highlighted on mouse hover
   *     'table-vcenter'     - middle align content vertically						                 
   */
  public classTable:string ="table table-striped table-bordered table-vcenter"; 
  /**
   * @ignore
   */
  constructor(private http:HttpClient) { }

  /**
   * Get records to show in the grid
   */
  public getLimitTable() {
    return this.limit;
  }
  /** 
  * Get class Table
  */
  public getclassTable() {
    return this.classTable;
  }
  
  /**
   * insert data by default of accounting groups and subgroups
   */
  public getGrupos(){
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/cBalance/grupos?token=${token}`
    return this.http.get(url);
  }

}
