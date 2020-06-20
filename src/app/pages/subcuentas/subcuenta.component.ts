import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subcuenta } from 'src/app/models/subcuenta.model';
import { SubcuentasService, SubgruposService } from 'src/app/services/services.index';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subgrupo } from 'src/app/models/subgrupo.model';
import Swal from 'sweetalert2';

/**
 * Component to modify or create new accounting subaccount
 */
@Component({
  selector: 'app-subcuenta',
  templateUrl: './subcuenta.component.html',
  styles: []
})
export class SubcuentaComponent implements OnInit {
  
  /**
   * Element form
   */
  @ViewChild('aForm', {static:true}) aForm:ElementRef;

  /**
   * Accounting subgroup model
   */
  public subgrupo:Subgrupo = new Subgrupo('',null,'','');

  /**
   * Account model
   */
  public subcuenta:Subcuenta = new Subcuenta('',null,null);

  /**
   * Form title
   */
  public title:String = "Subcuenta contables";

  /**
   * Object error form
   */
  public eForm = {
    eName:false,
    eSubcuenta:false,
    eSubcuentaUnique: false,
    eBalance: false,
    eSubgrupo:false,
  }

  

  

  /**
   * Constructor
   * 
   * @param _subcuentaService Subaccount service
   * @param router Router
   * @param activatedRoutes  ActiveRoute
   */
  constructor(
    private _subcuentaService: SubcuentasService,
    private _subgrupoService: SubgruposService,
    private router: Router,
    private activatedRoutes:ActivatedRoute
  ) { 
    activatedRoutes.params.subscribe( params =>{
      let id = params['id'];
      if(id!=='nuevo') {
        this.loadSubcuenta(id);
      }
    })
  }


  /**
   * @ignore
   */
  ngOnInit() {
    this.setFocus('subcuenta');
  }

  /**
   * Set Focus element input
   * 
   * @param el Element name
   */
  public setFocus(el:string) {
    const ele = this.aForm.nativeElement[el];
    if(ele) {
      ele.focus();
    }
  }

  /**
   * Load accounting account
   * 
   * @param id Identify account
   */
  public loadSubcuenta(id:string) {
    this._subcuentaService.getSubcuenta(id).subscribe(
      (resp:any) =>{
        this.subcuenta = resp.subcuenta;
        this.subgrupo = resp.subcuenta.subgrupo;
      }
    )
  }

  /**
   * Load data accounting group
   * 
   * @param id Identifier accounting subgroup
   * 
   */
  public loadSubgroup(id:String){
    this._subgrupoService.getSubgrupo(id)
    .subscribe( (resp:any)=> {
      console.log(resp)
    })
  }

  /**
   * Saved and update accounting account
   * 
   * @param f Ngform
   */

  public grabar(f:NgForm) {
    if(f.valid){
      this.subcuenta.name = f.form.value.name;
      this.subcuenta.subcuenta = f.form.value.subcuenta;
      this.subcuenta.subgrupo = this.subgrupo;
      
      this._subcuentaService.saveSubcuenta(this.subcuenta).subscribe(
        (resp:any) =>{
          this.subcuenta = resp.subcuenta;
          Swal.fire({
            icon:'info',
            title:'Subcuenta contable grabado correctamente',
            timer:1500
          })
        },
        (err)=>{
          if(err.error.error.error.errors.subcuenta.kind==="unique") {
            this.eForm.eSubcuenta = true;
            this.eForm.eSubcuentaUnique= true;
          }
        }
      )
    }
  }


  /**
   * Reset input subaccount
   */
  public newSubcuenta(){
      this.subcuenta._id='';
      this.subcuenta.name='';
      this.subcuenta.subcuenta=null;
      this.subgrupo.name='';
  }

  /**
  * Cancel form subaccount
  */
  public cancel() {
    this.router.navigate(['/subcuentas']);
  }

  /**
   * Form field validation
   * 
   * @param e Object form
   */

  public onFocusOut(e:any){
    if(e.subcuenta.touched && !e.subcuenta.valid) {
      return this.eForm.eSubcuenta=true;
    } else {
      if(e.subcuenta.value>79999 || e.subcuenta.value<100) {
        return this.eForm.eSubcuenta = true;
      } else {


        let div=1000;
        if (e.subcuenta.value>1000 &&  e.subcuenta.value<9999) {
          div= 100;
        }
        if (e.subcuenta.value<999) {
          div = 10;
        } 
        this._subgrupoService.getFindGroup(Math.trunc(e.subcuenta.value/div))
        .subscribe((resp:any)=>{
          if(resp.subgrupo) {
            this.subgrupo = resp.subgrupo;
            this.eForm.eSubcuenta = false;
            this.eForm.eSubgrupo = false;
          } else  {
            this.subgrupo.name = "";
            this.eForm.eSubgrupo = true;
            return this.eForm.eSubcuenta = true;
          }
        })

      }
    }

    if (e.name.touched && !e.name.valid) {
      return this.eForm.eName= true;
    } else {
      this.eForm.eName = false;
    }

   
  }

}
