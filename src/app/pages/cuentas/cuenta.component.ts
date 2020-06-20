import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Cuenta } from 'src/app/models/cuenta.model';
import { NgForm } from '@angular/forms';
import { CuentasService, SubcuentasService } from 'src/app/services/services.index';
import { Router, ActivatedRoute } from '@angular/router';
import { Subcuenta } from 'src/app/models/subcuenta.model';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';


/**
 * Component to modify or create new accounting account
 */
@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styles: []
})
export class CuentaComponent implements OnInit {

  /**
   * Element form
   */
  @ViewChild('aForm', {static:true}) aForm:ElementRef;

  /**
   * Form title
   */
  public title:string = "Cuenta contable"

  /**
   * Model account
   */
  public cuenta:Cuenta = new Cuenta ('',null);

  /**
   * Model subaccount
   */
  public subcuenta:Subcuenta = new Subcuenta('',null,null);


  /**
   * Object error form
   */
  public eForm = {
    eName:false,
    eCuenta:false,
    eCuentaUnique:false,
    eSubcuenta:false,
  }

  /**
   * Constructor
   * 
   * @param _cuentaService Account Service
   * @param _subcuentaService Subaccount service
   * @param router Router
   * @param activatedRoute ActiveRoutes
   */
  constructor(
    private _cuentaService: CuentasService,
    private _subcuentaService: SubcuentasService,
    private router: Router,
    private activatedRoute: ActivatedRoute 
    ) { 
      activatedRoute.params.subscribe( params =>{
        let id = params['id'];
        if(id!=='nuevo'){
          this.loadCuenta(id);
        } 
      })


    }
    
  /**
   * @ignore
   */
  ngOnInit() {
    this.setFocus('cuenta');
  }

  /**
   * Resert input group
   */
  public newCuenta() {
    this.cuenta._id='';
    this.cuenta.cuenta =null;
    this.cuenta.name = "";
    this.subcuenta.name = "";
  }

  /**
   * Create or update accounting group
   * 
   * @param f Object form
   */
  public grabar(f:NgForm) {
    if (f.valid) {
      this.cuenta.cuenta = f.form.value.cuenta;
      this.cuenta.name = f.form.value.name;
      this.cuenta._id = f.form.controls._id.value;
      
      this._cuentaService.saveCuenta(this.cuenta).subscribe(
        (resp:any)=>{
          this.cuenta = resp.cuenta;
          Swal.fire({
            icon:'info',
            title: 'Cuenta grabado correctamente',
            timer: 1500
          })
          this.setFocus('cuenta');
        },
        (err:HttpErrorResponse)=>{
          if(err.error.error.error.errors.cuenta.kind==="unique") {
            this.eForm.eCuenta=true;
            this.eForm.eCuentaUnique= true;
          }
        }
      )
    
    }
  }

  /**
   * Cancel from cuenta
   */
  public cancel(){
    this.router.navigate(['/cuentas']);
  }

   /**
   * Set Focus element input
   * 
   * @param el Element name
   */
  public setFocus(el:string){
    const ele = this.aForm.nativeElement[el];
    if(ele){
      ele.focus();
    }
  }

  /**
   * Load data account 
   * 
   * @param id Identifier account
   */
  public loadCuenta(id:string) {
      this._cuentaService.getCuenta(id).subscribe((resp:any)=>{
        this.cuenta = resp.cuenta;
        this.setFocus('cuenta');
      })
  }

  /**
   * Form field validation
   * 
   * @param e Object form
   */
  public onFocusOut(e:any){
    if (e.cuenta.value===null) {
      return this.eForm.eCuenta=true;
    }


    if (e.cuenta.touched ) {
      let cuenta:string = e.cuenta.value;

      if (cuenta.toString().length<8 && cuenta.toString().length>2) {
        let multiplicar:number;
        if (cuenta.toString().length>2) {
           multiplicar =  8 - cuenta.toString().length;
           multiplicar = 10**multiplicar
        }

        this.cuenta.cuenta =  e.cuenta.value *  multiplicar;
        this.eForm.eCuenta = false;
        this.eForm.eSubcuenta = false;
      
        this._subcuentaService.getFindSubcuenta(this.cuenta.cuenta/100000).subscribe(
          (resp:any)=>{
            if (resp.ok) {
              this.subcuenta = resp.subcuenta;
            } else {
              this._subcuentaService.getFindSubcuenta(this.cuenta.cuenta/1000).subscribe(
                (resp:any) =>{ 
                  if (resp.ok){ this.subcuenta = resp.subcuenta;} 
                  else { 
                    this.eForm.eCuenta = true;
                    this.eForm.eSubcuenta = true;
                    this.subcuenta.name=" ";
                  }
                }
              )
            }
          }
        )
      
      } else {

        if (e.cuenta.value>99999999 || e.cuenta.value<10000000) {
          return this.eForm.eCuenta = true;
        }

        return this.eForm.eCuenta = false;
      }
     
      
    }

    
  
    if (e.name.touched && !e.name.valid) {
      return this.eForm.eName= true;
    } else {
      this.eForm.eName = false;
    }
  }

}
