import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subgrupo } from 'src/app/models/subgrupo.model';
import { SubgrupoTable } from 'src/app/models/tables/subgrupos.model';
import { GruposService, SubgruposService, ConfigService } from 'src/app/services/services.index';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
/**
 * Component to show accounting subgroup
 */
@Component({
  selector: 'app-subgrupos',
  templateUrl: './subgrupos.component.html',
  styles: []
})
export class SubgruposComponent implements OnInit {
  
  /**
  * Element search focus
  */
  @ViewChild('focusSearch', {static:true}) focusSearch:ElementRef
  
  /**
   * Data loaded
   */
  public loaded:boolean = false;
  
  /**
   * Class table
   */
  public classTable:string ="";

  /**
   * Model subgroup
   */
  public subgrupos: Subgrupo;

  /** 
   * Model subgroup table
  */
  public subgrupoTable : SubgrupoTable;

  /**
   * Table title
   */
  public title:String ="Subgrupos contables"

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
  public nameSearch: string = "";

  /** 
   * Subgroups total
  */
  public count: number;

  /**
   * Order by accounting subgroup
   */
  public orderSubgrupo: number = 1;

  /**
   * Order by name
   */
  public orderName: number = 0;


  /**
   * Constructor
   * 
   * @param _grupos Inyect GruposService
   * @param _subgrupos Inyect SubgruposService
   * @param _config Inyect ConfigService
   * 
   */
  constructor(
    private _grupos:GruposService,
    private _subgrupos: SubgruposService,
    private _config : ConfigService,
    private router: Router
  ) {}

  /**
   * @ignore
   */
  ngOnInit() {
    this.getSubgrupos();
    this.getConfig();
    this.setFocus();
  }

  /**
   * Set Focus element input
   */
  public setFocus() {
    this.focusSearch.nativeElement.focus();
  }
  
  /**
   * Navigate new subgroup
   */
  public newSubgrupo() {
    this.router.navigate(["/subgrupo","nuevo"]);
  }

  /**
   * Get accounting subgroup
   */
  public getSubgrupos() {
    this.loaded = false;
    this._subgrupos.getSubgrupos(
      this.nameSearch,
      this.orderSubgrupo,
      this.orderName,
      ).subscribe( 
        (resp:SubgrupoTable)=>{
          this.subgrupoTable = resp;
          this.count = this.subgrupoTable.count;
          this.subgrupos = this.subgrupoTable.subgrupos;
        },
        (err)=>{ },
        ()=>{this.loaded = true;})
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
    this.getSubgrupos();
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
    if (e==='subgrupo') {
     this.orderName=0;
     if(this.orderSubgrupo==-1){
       this.orderSubgrupo=1;
     } else {
       this.orderSubgrupo=-1;
     }
   }
   if (e==='name') {
     this.orderSubgrupo=0;
     if(this.orderName==-1){
       this.orderName=1;
     } else {
      this.orderName=-1;
     }
   }
   this.getSubgrupos();
  }
  //TODO:Eliminar subgrupos contables. Pendiente de subcuentas contables
  /**
   * Remove Accounting subgroup
   * 
   * @param id Id subgroup
   */
  public removeSubgroup(id:string):void {
   
    Swal.fire({
      icon:'question',
      title: '¿Seguro...?',
      text:'De eliminar el grupo contable',
      showCancelButton:true,
      showConfirmButton:true,
    }).then(resp=>{
      /*
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
      }*/
    })
    
  }
}
