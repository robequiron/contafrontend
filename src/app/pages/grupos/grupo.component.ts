import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Grupo } from 'src/app/models/grupo.model';
import { GruposService } from 'src/app/services/services.index';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

/**
 * Component to modify or create new accounting group
 */
@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styles: []
})
export class GrupoComponent implements OnInit {

  /**
   * Element Form
   */
  @ViewChild('aForm', {static:true}) aForm:ElementRef;


  
  /**
   * Accounting group model
   */
  public grupo:Grupo = new Grupo ('',null);

  /**
   * Form title
   */
  public title:String = "Grupos contables";

  /** 
   * Object error form
  */
  public eForm = {
    eName:false,
    eGrupo:false,
    eGrupoUnique:false,
  }

  /**
   * Constructor
   * 
   * @param _grupoService Accounting group Service
   * @param route Router
   * @param activatedRoutes ActiveRoute
   */

  constructor(
    private _grupoService:GruposService,
    private router: Router,
    private activatedRoutes:ActivatedRoute,
  ) { 

      activatedRoutes.params.subscribe( params =>{
        let id= params['id'];
        if(id!=='nuevo'){
          this.loadGroup(id);
        }
      })

    }
  /**
   * @ignore
   */
  ngOnInit() {
    this.setFocus('grupo');
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
   * Load data accounting group
   * 
   * @param id Identifier accounting group
   */
  public loadGroup(id:String){
    this._grupoService.getGrupo(id).subscribe(
      (resp:Grupo) =>{
        this.grupo = resp;
      }
    )
  }

  /**
   * Create or update accounting group
   * 
   * @param id Object form
   */
  public grabar(f:NgForm) {
      if (f.valid){
        this.grupo.name = f.form.value.name;
        this.grupo.grupo = f.form.value.grupo;
        this.grupo._id = f.form.controls._id.value;
        this.grupo.name = this.grupo.name.toUpperCase();


        this._grupoService.saveGrupo(this.grupo).subscribe( 
          (resp:any)=>{
            this.grupo = resp.grupo;
            Swal.fire({
              icon:'info',
              title: 'Grupo grabado correctamente',
              timer: 1500 
            })
            this.setFocus('grupo')
          },
          (err)=>{
            if(err.error.error.error.errors.grupo.kind==="unique") {
              this.eForm.eGrupo= true;
              this.eForm.eGrupoUnique = true;
            }

          }
        )
      }
  }

  /**
   * Reset inputs group
   */
  public newGroup(){
    this.grupo._id = '';
    this.grupo.name = '';
    this.grupo.grupo = null;
  }

  /**
   * Cancel form subgroup
   */
  public cancel() {
    this.router.navigate(['/grupos']);
  }

  /**
   * Form field validation
   * 
   * @param e Object form
   */
  public onFocusOut(e:any){
    if (e.grupo.touched && !e.grupo.valid) {
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
    }
  }

}
