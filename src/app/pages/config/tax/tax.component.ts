import { Component, OnInit} from '@angular/core';
import { TaxesService } from 'src/app/services/services.index';
import { Tax } from 'src/app/models/tax.model';
import { Porcentaje, _iPorcentaje} from 'src/app/models/porcentaje.model';
import { TaxTable } from 'src/app/models/tables/taxes.model';
import { from } from 'rxjs';
import Swal from 'sweetalert2';
/**
 * Component show taxes
 */
//TODO: Contemplar fecha de inicio y fecha de fin para la aplicación del impuesto.
@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styles: []
})
export class TaxComponent implements OnInit {

  

  /**
   * Title
   */
  public titleA = "Impuestos";

  /**
   * Title B
   */
  public titleB = "Lineas de impuestos";

  /**
   * Data loaded
   */
  public loaded: boolean= true;
 
  /**
   * Model taxes table
   */
   public taxTable:TaxTable;

  /**
   * Model tax
   */
  public taxes: Tax;


  /**
   * Tax Select
   */
  public taxSelect :Tax = new Tax(null,'');

  /**
   * Percentage select
   */
  public taxPorSelect: Porcentaje = new Porcentaje('',null);

  /**
   * Over Select
   */
  public over : String="";

  /**
   * Over percentage select
   */
  public overPor: String="";

  /**
   * Model tax
   */
  public taxEdit:Tax = new Tax(null,'');

  /**
   * Model taxPor
   */
  public porEdit:Porcentaje = new Porcentaje('',null);

  /**
   * Model porcentajes
   */
  public porcentajes: _iPorcentaje;

  /**
   * Visible Tax Form
   */
  public visibleTaxForm: boolean = false;

  /**
   * Visible TaxPor Form
   */
  public visibleTaxPorForm: boolean = false;

  /**
   * 
   * @param _taxService 
   */

  constructor(public _taxService: TaxesService) { }

  /**
   * @ignore
   */
  ngOnInit() {
    this.getTaxes();
    
  }

  /**
   * Get taxes
   */
  public getTaxes() {
    this._taxService.getTaxes().subscribe(
      (resp:TaxTable)=>{
        if (resp.ok) {
          this.taxes = resp.taxes;
        }
      },
      null,
      ()=>{
        this.loaded= false;
      }
    )
  }

  /**
   * Edit tax
   * 
   * @param tax Model tax
   */
  public editTax(tax:Tax) {
    this.visibleTaxForm = true;
    this.taxEdit = tax;
  }

  /**
   * Edit items percentage of a tax
   */
  public editTaxPor(por:Porcentaje) {
    this.visibleTaxPorForm = true;
    this.porEdit = por;
  }

  /**
   * New tax
   */
  public newTax() {
    this.taxEdit._id="";
    this.taxEdit.taxnumber=null;
    this.taxEdit.name = "";
    this.visibleTaxForm = true;
  }

  /**
   * New Tax percentage
   */
  public newTaxPor() {
    if (this.taxSelect.taxnumber===null) {
      Swal.fire({
        title:'Debe seleccionar un impuesto',
        icon: 'warning',
        timer:1000
      })
    } else {
      
      console.log(this.porEdit);
      this.visibleTaxPorForm = true;
      this.porEdit = new Porcentaje('',null);
    }
  }

  /**
   * Child form response, tax form
   * 
   * @param e Event emiter
   * 
   */ 
  public resTaxForm(e) {
    if (!e) {
      this.getTaxes();
      this.visibleTaxForm = false;
    } else {
      this.getTaxes();
    }
  }
  /**
   * Child form response, tax percentage form
   * @param e 
   */

  public resTaxPorForm(e) {
    if (!e){
      this.visibleTaxPorForm = false;
    } else {
      this.porcentajes[this.porcentajes.length] = this.porEdit;
      this.getTaxes();
    }
  }

  /**
   * Select Tax
   * 
   * @param tax Tax Model
   */

  public selectTr(tax:Tax){
    this.taxSelect = tax;
    this.porcentajes = tax.porcentaje;
  }

  /**
   * Select percentage of a tax
   * 
   * @param porcentaje Tax Percentage
   */
  public selectTrPor(porcentaje:Porcentaje) {
    this.taxPorSelect = porcentaje;
  }

  /**
   * Change of class Tr with the event mouseover
   * 
   * @param id _id Tax
   */
  public overTr(id:string) {
    this.over = id;
  }
  /**
   * Change of class Tr with the event mouseover
   *
   * @param id _id Tax Percentage
   */
  public overTrPor(id:string) {
    this.overPor = id;
  }

  //TODO: No eliminar si existen lineas con el impuesto
  /**
   * Delete Percentage of a tax
   * @param id _id Tax Percentage
   */
  public deletePor(id:string) {
    this._taxService.deletePorcentaje(this.taxSelect._id, id).subscribe( resp =>{
      console.log(resp);
    })
  }

}
