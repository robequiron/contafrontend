import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Via } from 'src/app/models/via.model';
import { NgForm } from '@angular/forms';
import { ViasService } from 'src/app/services/services.index';

/**
 * Component to modify or create new way
 */
@Component({
  selector: 'app-via',
  templateUrl: './via.component.html',
  styles: []
})
export class ViaComponent implements OnInit {

  @Output() resForm:EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Title form
   */
  public title:string = "Tipos de vías"

  /**
   * Via model
   */
  public via:Via = new Via('','',null);

  /** 
   * Object error form
  */
  public eForm = {
    eName:false,
    eCodigo:false,
    eCodigoUnique:false,
  }

  constructor(public _viaService:ViasService) { }


  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * Reset form
   */
  public newVia() {
    this.via._id = '';
    this.via.name = '';
    this.via.code = '';
  }

  public grabar(f:NgForm) {
    console.log(f);
  }

  /**
   * Cancel form way
   */
  public cancel() {
    this.resForm.emit(false);
  }
 /**
   * Form field validation
   * 
   * @param e Object form
   */
  public onFocusOut(e:any){
    /*if (e.grupo.touched && !e.grupo.valid) {
      return this.eForm.eGrupo = true;
    } else {
      if (e.grupo.value>9 || e.grupo.value<1) {
        return this.eForm.eGrupo = true;
      } else {
        this.eForm.eGrupo = false;
      }
    }

    if (e.name.touched && !e.name.valid) {
      return this.eForm.eName= true;
    } else {
      this.eForm.eName = false;
    }*/
  }


}
