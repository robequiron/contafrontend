import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Porcentaje } from '../../models/porcentaje.model';
import { NgForm } from '@angular/forms';
import { Tax } from 'src/app/models/tax.model';
import { TaxesService } from 'src/app/services/services.index';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';


/**
 * Component, update or create tax line
 */
@Component({
  selector: 'app-taxporform',
  templateUrl: './taxporform.component.html',
  styles: []
})
 

export class TaxporformComponent implements OnInit {

  @Input() tax_id:String;
  @Input() porEdit:Porcentaje

  @Output() resporform: EventEmitter<boolean> = new EventEmitter<boolean>();

 

  /**
   * 
   */
  public tax:Tax = new Tax(null,'');

    /**
   * Object error form 
   */
  public eForm = {
    eName: false,
    ePorcentaje:false,
  }

  constructor(public _taxService:TaxesService) { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  public grabar(f:NgForm) {
    console.log(f);
    
    this.porEdit.name = f.form.value.name;
    this.porEdit.porcentaje = f.form.value.porcentaje;
    this.tax._id = f.form.controls.tax_id.value;
    

    this._taxService.savePorcentaje(this.tax_id, this.porEdit)
    .pipe(
      
      map((resp:any)=>{
        
        if (resp.ok) {
          if (resp.create){
            return resp.tax.porcentaje['0'];
          } else {
            
          } 

          
        } else {
          return null;
        }
      })
    )
    .subscribe(
      
      
      (resp:Porcentaje)=>{
        if (resp) {
          this.porEdit._id = resp._id;
          Swal.fire({
            title:'Porcentaje grabado correctamente',
            icon:'info',
            timer:1500
          })
        
        } else {
          Swal.fire({
            title:'Error al grabar el porcentaje',
            icon:'warning',
            timer: 1500
          })
        }
        this.resporform.emit(true)
      }
    )
  }

    /**
   * Form field validation
   * 
   * @param e Object form
   */
  public onFocusOut(e) {
    //console.log(e)
    /*
    this.eForm.eTaxUnique = false;
    if(e.taxnumber.touched && !e.taxnumber.valid) {
        console.log("1")
        return this.eForm.eTaxNumber = true;
    } else {
      if (e.taxnumber.value > 9 || e.taxnumber.value < 1) {
        console.log("2")
        return this.eForm.eTaxNumber = true;
       } else {
        this.eForm.eTaxNumber = false;
       }
    }

    if (e.name.touched && !e.name.valid) {
      return this.eForm.eName= true;
    } else {
      this.eForm.eName = false;
    }*/
  }

   /**
   * Cancel form
   */
  public cancel(){
    this.resporform.emit(false);
  }

  public punto(e:any){
    console.log(e);
  }

}
