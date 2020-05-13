import { Component, OnInit } from '@angular/core';
import { ConfigService, GruposService } from 'src/app/services/services.index';
import Swal from 'sweetalert2';
import { GrupoTable } from 'src/app/models/tables/grupos.model';
import { Grupo } from 'src/app/models/grupo.model';
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
   * Search name user
   */
  public nameSearch:string ="";

  /**
   * Users total
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
   */
  constructor(
    private _grupos:GruposService, 
    private _config:ConfigService,
  ) { }

  /**
  *  @ignore
  */            
  ngOnInit() {
    this.getConfig();
    this.getGrupos();
  }

  /**
   * Loads default from tables		
   */
  public getConfig() {
    this.itemsPerPage = this._config.getLimitTable();
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
      ).subscribe( (resp:GrupoTable)=>{
        this.grupoTable= resp;
        this.count = resp.count;
        this.grupos = resp.grupos;
    })
  }

  /**
   * Set items per page
   * 
   * Items por página
   * @param n Page number
   */
  public setItemPerPage(n:number):void {
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
   * Remove User
   * 
   * @param id Id user
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
          (resp)=>{
            Swal.fire({
            icon:'info',
            title:'Eliminado correctamente',
            timer:1000
            })
            this.getGrupos();
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
