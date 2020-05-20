import { Injectable } from '@angular/core';
/**
 * Services for requests with server - Config
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  //TODO:Establecer configuración general y por usuario
  //TODO:Grabar grupos contables por defecto

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
  constructor() { }

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

}
