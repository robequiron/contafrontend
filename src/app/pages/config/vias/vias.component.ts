import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigService, ViasService } from 'src/app/services/services.index';
import { Via } from 'src/app/models/via.model';
import { ViaTable } from 'src/app/models/tables/vias.model';

/**
 * Component to show way
 */

@Component({
  selector: 'app-vias',
  templateUrl: './vias.component.html',
  styles: []
})
export class ViasComponent implements OnInit {


  @Output() resViaForm: EventEmitter<Via> = new EventEmitter<Via>();

  /**
   * Table title
   */
  public title:string = "Vías"


  /**
   * Data loaded
   */
  public loaded: boolean = false;

  /**
  * Class table
  */
 public classTable:string ="";

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
  public p:number = 1;

  /**
   * Search name way
   */
  public nameSearch: string="";

  /**
   * Model via
   */

  public vias:Via;



  /**
   * Model table via
   */
  public viaTable:ViaTable;

  /**
   * Total way
   */
  public count:number = 0;

   /**
    * Order by  name way
    */
   public orderName: number = 1;

  /**
   * 
   * @param _config Inyect ConfigService
   * @param _vias Inyect ViasSersvice
   */
  constructor(
    private _config:ConfigService,
    private _vias:ViasService
  ) 
  { }


  /**
   * @ignore
   */
  ngOnInit() {
    this.getConfig();
    this.getVias();
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
   * Loads default from tables		
   */
  public getConfig() {
    this.itemsPerPage = this._config.getLimitTable();
    this.classTable = this._config.getclassTable();
  }

  //TODO:Comando pendiente para pantalla general de instalación
  public insertDataVias() {
    this._config.getVias().subscribe( (resp)=>{
      console.log(resp);
    })
  }

  /**
   * Get vias
   */
  public getVias() {
    this._vias.getVias(
      this.nameSearch,
      this.orderName
    ).subscribe( 
      (resp:ViaTable)=>{
        this.vias = resp.vias;
        this.count = resp.count;
      },
      null,
      ()=>{
        this.loaded = true;
      }
    )
  }

  /**
  * Delete search parameters
  */
  public clearSearch() {
    this.nameSearch ="";
    this.getVias();
  }


  public removeVia(id:string) {}

  public newVia() {
    let via = new Via('','',null);
    this.resViaForm.emit(via);
  }


   /**
  * Orber by column
  * 
  * @param e Column name to order
  */
 public orderby(e:string){
  if (e==='name') {
    if(this.orderName==-1){
      this.orderName=1;
    } else {
     this.orderName=-1;
    }
  }
  this.getVias();
 }

 

}
