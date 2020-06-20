import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CuentasService, ConfigService } from 'src/app/services/services.index';
import { Cuenta } from 'src/app/models/cuenta.model';
import { CuentaTable } from 'src/app/models/tables/cuentas.model';
import { Router } from '@angular/router';


/**
 * Component to show account
 */
@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: []

})
export class CuentasComponent implements OnInit {

  /**
  * Element search focus
  */
  @ViewChild('focusSearch', {static:true}) focusSearch:ElementRef

  /**
   * Data loaded
   */
  public loaded: boolean= false;

  /**
   * Class table
   */
  public classTable: string="";

  /**
   * Model account
   */
  public cuentas: Cuenta;

  /**
   * Model account table
   */
  public cuentaTable : CuentaTable;

  /**
   * Table title
   */
  public title:String="Cuentas contables"

  /**
   * Item per page
   */
  public itemsPerPage:number;

  /**
   * Total pages
   */
  public totalPages:number;

  /**
   * Actual page
   */
  public p:number=1;

  /**
   * Search name account
   */
  public nameSearch: string= "";

  /**
   * Search number account
   */
  public cuentaSearch: number=null;

  /**
   * Account total
   */
  public count: number;

  /**
   * Order by account 
   */
  public orderCuenta: number = 1;
  
  /**
   * Order by name
   */
  public orderName: number = 0;

  /**
   * Constructor
   * 
   * @param _cuentaService Inyect CuentaService
   * @param _config Inyect ConfigService
   * @param router Router
   */
  constructor(
    private _cuentaService : CuentasService,
    private _config: ConfigService,
    private router:Router,
 
  ) {}

  /**
   * @ignore
   */
  ngOnInit() {
    this.setFocus();
    this.getConfig();
    this.getCuentas();
  }
  /**
   * Set focus element input
   */
  public setFocus(){
    this.focusSearch.nativeElement.focus();
  }
  /**
   * Navigate new account
   */
  public newCuenta(){
    this.router.navigate(["/cuenta", "nuevo"]);
  }

  /**
   * Load data account
   */

  public getCuentas(){
    this.loaded = false;
    this._cuentaService.getCuentas(
      this.nameSearch,
      this.cuentaSearch,
      this.orderCuenta,
      this.orderName
    ).subscribe(
      (resp:CuentaTable)=>{
        this.cuentaTable= resp;
        this.count = this.cuentaTable.count;
        this.cuentas = this.cuentaTable.cuentas;
      }, 
      (err)=>{},
      ()=>{this.loaded = true;}
    )
  }


  /**
   * Set items per page
   * 
   * Items por página
   * @param n Page number
   */
  public setItemPerPage(n:number):void {
    this.p = 1;
    this.itemsPerPage = n;
  }


  /**
  * Delete search parameters
  */
  public clearSearch() {
    this.nameSearch = '';
    this.getCuentas();
  } 
  /**
   * Loads default from tables		
   */
  public getConfig() {
    this.itemsPerPage = this._config.getLimitTable();
    this.classTable = this._config.getclassTable();
  }

  /**
   * Orber by column
   * 
   * @param e Column name to order
   */
  public orderby(e:string){
    if (e==='cuenta') {
     this.orderName=0;
     if(this.orderCuenta==-1){
       this.orderCuenta=1;
     } else {
       this.orderCuenta=-1;
     }
   }
   if (e==='name') {
     this.orderCuenta=0;
     if(this.orderName==-1){
       this.orderName=1;
     } else {
      this.orderName=-1;
     }
   }
   this.getCuentas();
  }


  //TODO: Pendiente eliminar cuentas, no es posible eliminar cuenta con movimientos
  /**
   * Remove account
   * 
   * @param id Identifier account
   */
  public removeCuenta(id:String){

  }
}
