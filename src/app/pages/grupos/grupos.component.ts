import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConfigService, GruposService } from 'src/app/services/services.index';
import Swal from 'sweetalert2';
import { GrupoTable } from 'src/app/models/tables/grupos.model';
import { Grupo } from 'src/app/models/grupo.model';
import { Router } from '@angular/router';
/**
 * Component to show accounting group
 */

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styles: []
})
export class GruposComponent implements OnInit {
  /**
   * Element search focus
   */
  @ViewChild("focusSearch", {static:true}) focusSearch: ElementRef;
  
  /**
   * Data loaded
   */
  public loaded:boolean = false;  

  /**
  * Class table
  */
  public classTable:string ="";
  
  
  /**
   * Model group
   */
  public grupos:Grupo;

  /**
   * Model group table
   */
  public grupoTable:GrupoTable;

  /**
   * Table title
   */
  public title:String= "Grupos contables";
  /**
   * Item per page
   */
  public itemsPerPage:number;
  /**
   * Total pages
   */
  public totalPages: number
  /**
   * Actual page
   */
  public p:number = 1;
  /**
   * Search name group
   */
  public nameSearch:string ="";

  /**
   * Groups total
   */
  public count:number;
  /**
   * Order by accounting group
   */
  public orderGrupo:number=1;
  /**
   * Order by name
   */
  public orderName:number=0;
  

  /**
   * Constructor
   * 
   * @param _grupos Inyect UserService
   * @param _config Inyect ConfigService
   * @param router Router Module
   */
  constructor(
    private _grupos:GruposService, 
    private _config:ConfigService,
    private router: Router,
  ) { }

  /**
  *  @ignore
  */            
  ngOnInit() {
    this.getConfig();
    this.getGrupos();
    this.setFocus();
  }
  
  /**
   * Set Focus element input
   */
  public setFocus() {
    this.focusSearch.nativeElement.focus();
  }

  /**
   * Navigate new group
   */
  public newGrupo() {
    this.router.navigate(["/grupo","nuevo"]);
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
    if (e==='grupo') {
     this.orderName=0;
     if(this.orderGrupo==-1){
       this.orderGrupo=1;
     } else {
       this.orderGrupo=-1;
     }
   }
   if (e==='name') {
     this.orderGrupo=0;
     if(this.orderName==-1){
       this.orderName=1;
     } else {
      this.orderName=-1;
     }
   }
   this.getGrupos();
  }

   /**
   * Get Users
   */  
  public getGrupos(){
    this._grupos.getGrupos(
      this.nameSearch,
      this.orderGrupo,
      this.orderName
      ).subscribe( 
        (resp:GrupoTable)=>{
          this.grupoTable= resp;
          this.count = resp.count;
          this.grupos = resp.grupos;
        },
        null,
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
    this.getGrupos();
  }

  /**
   * Remove Accounting group
   * 
   * @param id Id group
   */
  public removeGroup(id:string):void {
   
    Swal.fire({
      icon:'question',
      title: '¿Seguro...?',
      text:'De eliminar el grupo contable',
      showCancelButton:true,
      showConfirmButton:true,
    }).then(resp=>{
      
      if(resp.value) {
        this._grupos.deleteGrupo(id).subscribe(
          (resp:any)=>{
            if (resp.ok){
              Swal.fire({
              icon:'info',
              title:'Eliminado correctamente',
              timer:1000
              })
              this.getGrupos();
            } else {
              Swal.fire({
                icon:'warning',
                title: 'No es posible eliminar el grupo',
                text: 'Contiene subgrupos contables',
                timer:1500
              })
            }
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
