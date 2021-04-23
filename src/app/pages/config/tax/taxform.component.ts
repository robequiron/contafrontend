import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tax } from 'src/app/models/tax.model';
import { TaxesService } from 'src/app/services/services.index';
import Swal from 'sweetalert2';

/**
 * Component to modify or create new taxe3s
 */
@Component({
  selector: 'app-taxform',
  templateUrl: './taxform.component.html',
  styles: []
})
export class TaxformComponent implements OnInit {

  
  
  /**
   * Object error form 
   */
  public eForm = {
    eName:false,
    eTaxNumber: false,
    eTaxUnique: false,
  }
  
  /**
   * Model tax
   */
  @Input('tax') tax:Tax;

  @Output() resform: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor( private _taxservice: TaxesService) {
   
   }
  
  /**
  * @ignore
  */
  ngOnInit() {
     console.log(this.tax)
  }

  /**
   * Save and update tax
   * 
   * @param f NgForm
   */
  public grabar(f:NgForm) {
    if (f.valid) {
      this.tax.name = f.form.value.name;
      this.tax.taxnumber = f.form.value.taxnumber;
      this.tax._id = f.form.controls._id.value;

      this._taxservice.saveTax(this.tax).subscribe( 
        (resp:any)=>{
          this.tax._id = resp.tax._id;
          if (resp.ok) {
            Swal.fire({
              icon: 'info',
              title: 'Impuesto creado correctamente',
              timer: 1500,
            })
            this.resform.emit(true);
          }
        },
        (err)=>{
          console.log(err)
          if (err.error.error.error.errors.taxnumber.kind==="unique") {
            this.eForm.eTaxNumber = true;
            this.eForm.eTaxUnique = true;
          }
        }
      )

    }
  }

  /**
   * Form field validation
   * 
   * @param e Object form
   */
  public onFocusOut(e) {
    console.log(e)
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
    }
  }

  /**
   * Cancel form
   */
  public cancel(){
    this.resform.emit(false);
  }


}
