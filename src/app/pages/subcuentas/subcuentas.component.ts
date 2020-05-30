import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SubcuentasService, SubgruposService, ConfigService } from 'src/app/services/services.index';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubcuentaTable } from 'src/app/models/tables/subcuentas.model';
import { Subcuenta } from 'src/app/models/subcuenta.model';
import { map, tap } from 'rxjs/operators';

/**
 * Component to show subaccount
 */
@Component({
  selector: 'app-subcuentas',
  templateUrl: './subcuentas.component.html',
  styles: []
})
export class SubcuentasComponent implements OnInit {
  /**
   * Element search focus
   */
  @ViewChild('focusSearch', {static:true}) focusSearch:ElementRef
  
  /**
   * Data loaded
   */
  public loaded:boolean=false;

  /**
   * Class table
   */
  public classTable:string="";

  /**
   * Model subaccount table
   */
  public subcuentaTable: SubcuentaTable;

  /**
   * Model subaccount 
   */
  public subcuentas: Subcuenta;

  /**
   * Table title
   */
  public title:String = "Subcuentas contables";

  /**
   * Item per page
   */
  public itemsPerPage: number;

  /**
   * Total pages
   */
  public totalPages: number;

  /**
   * Actual page
   */
  public p:number = 1;
  
  /**
   * Search name subgroup
   */
  public nameSearch: string="";

  /**
   * Search subcuenta
   */
  public subcuentaSearch: number=null;
  /**
   * Subaccount total
   */
  public count: number = 0;

  /**
   * Order by subaccount
   */
  public orderSubcuenta: number = 1;

  /**
   * Order by name
   */
  public orderName: number = 0;

  /**
   * 
   * @param _subgrupos Inyect SubgrupoService
   * @param _subcuentas Inyect SubCuentasService
   * @param _config Inyect ConfigService
   */
  constructor(
    private _subgrupos: SubgruposService,
    private _subcuentas: SubcuentasService,
    private _config: ConfigService,
    private router: Router
  ) { this.getSubCuentas();}

  /**
   * @ignore
   */
   ngOnInit() {
    this.getConfig();
    this.setFocus();
    
  }

  /**
   * Set Focus element input
   */
  public setFocus(){
    this.focusSearch.nativeElement.focus();
  }

  /**
   * Navigate new subaccount
   */
  public newSubcuenta(){
    this.router.navigate(["/subcuenta", "nuevo"]);
  }

  /**
   * Get accounting subgroup
   */
  public getSubCuentas() {
    this.p = 1;
    this._subcuentas.getSubcuentas(this.nameSearch,this.subcuentaSearch,this.orderSubcuenta,this.orderName)
    .subscribe( (resp:SubcuentaTable)=>{
      this.count = resp.count;
      this.orderName = resp.orderName;
      this.orderSubcuenta = resp.orderSubcuenta;
      this.subcuentas = resp.subcuentas;
    },
    null,
    ()=>{
      this.loaded = true;
    }
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
    this.subcuentaSearch = null;
    this.getSubCuentas();
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
   if (e==='subcuenta') {
     this.orderName=0;
     if(this.orderSubcuenta==-1){
       this.orderSubcuenta=1;
     } else {
       this.orderSubcuenta=-1;
     }
   } 
   if (e==='name') {
     this.orderSubcuenta=0;
     if(this.orderName==-1){
       this.orderName=1;
     } else {
      this.orderName=-1;
     }
   }
   this.getSubCuentas();
  }

    /**
   * Remove Accounting subgroup
   * 
   * @param id Id subgroup
   */
  public removeSubcuenta(id:string):void {
   
    Swal.fire({
      icon:'question',
      title: '¿Seguro...?',
      text:'De eliminar la subcuenta contable',
      showCancelButton:true,
      showConfirmButton:true,
    }).then(resp=>{
      if(resp.value) {
        this._subcuentas.deleteSubcuenta(id).subscribe(
          (resp)=>{
            Swal.fire({
            icon:'info',
            title:'Eliminado correctamente',
            timer:1000
            })
            this.setFocus();
            this.getSubCuentas();
          },
          ()=>{
            Swal.fire({
            icon:'warning',
            title:'Error',
            text: 'Al eliminar el grupo',
            })
          })
      }
    })
    
  }

}
