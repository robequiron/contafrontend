import { Component, OnInit } from '@angular/core';
import { GruposService, ConfigService, SubgruposService, SubcuentasService } from 'src/app/services/services.index';
import { GrupoTable } from 'src/app/models/tables/grupos.model';
import Swal from 'sweetalert2';
import { SubgrupoTable } from 'src/app/models/tables/subgrupos.model';
import { SubcuentaTable } from 'src/app/models/tables/subcuentas.model';

/**
 * Component to show config accounting
 */
@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styles: []
})
export class ContabilidadComponent implements OnInit {

  /**
   * Number of groups
   */
  public countGrupos = 0;
  /**
   * Number of subgroups
   */
  public countSubgrupos = 0;

  /**
   * Number of subcuentas
   */
  public countSubcuentas = 0;

  /**
   * Load insert data
   */
  public insertedData: boolean = false;

  /**
   * Constructor
   * 
   * @param _gruposService Group services
   * @param _subgruposService Subgroup services
   * @param _configService Config services
   */
  constructor(
    private _gruposService:GruposService,
    private _subgruposService:SubgruposService,
    private _subcuentasService: SubcuentasService,
    private _configService:ConfigService,
  ) { }

  /**
   * @ignore
   */
  ngOnInit() {
    this.getCountGrupos();
    this.getCountSubgrupos();
    this.getCountSubcuentas();
  }

  /**
  * Get count account group 
  */
  private getCountGrupos() {
    this._gruposService.getGrupos("",1,0).subscribe(
      (resp:GrupoTable)=>{
        this.countGrupos = resp.count
      }
    )
  }
  /**
   * Get accounting subgroup
   */
  private getCountSubgrupos() {
    this._subgruposService.getSubgrupos("",1,0).subscribe( 
        (resp:SubgrupoTable)=>{
          this.countSubgrupos = resp.count;
        })
  }

  /**
   * Get accounting account 
   */
  private getCountSubcuentas() {
    this._subcuentasService.getSubcuentas("",null,1,0).subscribe(
      (resp:SubcuentaTable)=>{
        this.countSubcuentas = resp.count;
      }
    )
  }

  /**
   * Creation of groups and subgroups and accountants
   */
  public crearGrupos(){
    Swal.fire({
      icon:'question',
      title:'¿Seguro...?',
      text: 'Desea crear las cuenta por defecto',
      showConfirmButton:true,
      showCancelButton:true,
    }).then(resp=>{
      if(resp.value) {
        this.insertedData = true;
        this._configService.getGrupos().subscribe( (resp:any)=>{
            this.countGrupos = resp.countgroup;
            this.countSubgrupos = resp.countsubgroup;
            this.countSubcuentas = resp.countsubcuenta;
        },
        null,
        ()=>{
          this.insertedData = false;
        })    
      } else {
        Swal.fire({
          icon:'info',
          title: 'Proceso cancelado',
          timer:1500,
        })
      }
    })
  }

}
