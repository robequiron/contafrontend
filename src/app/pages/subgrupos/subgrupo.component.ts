import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subgrupo } from 'src/app/models/subgrupo.model';
import { GruposService, SubgruposService } from 'src/app/services/services.index';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Grupo } from 'src/app/models/grupo.model';
import Swal from 'sweetalert2';


/**
 * Component to modify or create new accounting subgroup
 */
@Component({
  selector: 'app-subgrupo',
  templateUrl: './subgrupo.component.html',
  styles: []
})
export class SubgrupoComponent implements OnInit {
  /**
   * Element Form
   */
  @ViewChild('aForm', {static:true}) aForm: ElementRef;
  
  /**
   * Accounting subgroup model
   */
  public subgrupo:Subgrupo = new Subgrupo('',null,'','');


  /**
   * Accounting group model
   */
  public grupo:Grupo = new Grupo('',null);

  /**
   * Form title
   */
  public title:String = "Subgrupos contables";

  /** 
   * Object error form
  */
  public eForm = {
    eName:false,
    eGrupo:false,
    eSubGrupo:false,
    eSubGrupoUnique:false,
  }

  /**
   * Constructor
   * 
   * @param _grupoService Accounting group Service
   * @param _subgrupoService Accounting subgroup Service
   * @param activatedRoute Active Route
   */

  constructor(
    private _grupoService : GruposService,
    private _subgrupoService : SubgruposService,
    private route: Router,
    private activatedRoute : ActivatedRoute,
  ) { 
    activatedRoute.params.subscribe( params => {
      let id = params['id'];
      if(id!=='nuevo'){
        this.loadSubgroup(id);
      }
    })
  }

  /**
   * @ignore
   */
  ngOnInit() {
    this.setFocus('subgrupo');
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
   * @param id Identifier accounting subgroup
   * 
   */
  public loadSubgroup(id:String){
    this._subgrupoService.getSubgrupo(id)
    .subscribe( (resp:any)=> {
      this.grupo = resp.subgrupo.grupo;
      this.subgrupo.name = resp.subgrupo.name;
      this.subgrupo._id = resp.subgrupo._id;
      this.subgrupo.subgrupo = resp.subgrupo.subgrupo;
      this.subgrupo.grupo = this.grupo._id;
    })
  }


  /**
   * Create or update accounting subgroup
   * 
   * @param f Object Form
   */
  public grabar(f:NgForm){
    if(f.valid) {
      if (this.eForm.eGrupo) {
        this.eForm.eGrupo = true;
        this.eForm.eSubGrupo =true;
      } else {
        this.subgrupo._id = f.form.controls._id.value;
        this.subgrupo.grupo = this.grupo._id;
        this.subgrupo.name = this.subgrupo.name.toUpperCase();
        
        this._subgrupoService.saveSubgrupo(this.subgrupo)
        .subscribe(
          (resp:any) => {
          this.subgrupo =resp.subgrupo;
          Swal.fire({
            icon:'info',
            title:'Subgrupo grabado correctamente',
            timer:1500
          })
          this.setFocus('subgrupo');
          },
          (err) => {
            if(err.error.error.error.errors.subgrupo.kind==="unique") {
              this.eForm.eSubGrupo = true;
              this.eForm.eSubGrupoUnique = true;
            }
          }
        )
      }
    }
  }


  /**
   * Reset inputs subgroup
   */
  public newSubgroup(){
    this.grupo._id= '';
    this.grupo.name='';
    this.subgrupo._id = '';
    this.subgrupo.grupo = '';
    this.subgrupo.name = '';
    this.subgrupo.subgrupo = null;
  }

  /**
   * Cancel form subgroup
   */
  public cancel() {
    this.route.navigate(['/subgrupos']);
  }

  /**
   * Form field validation
   * 
   * @param e Object form
   */
  public onFocusOut(e:any) {
    if (e.subgrupo.touched && !e.subgrupo.valid) {
      this.eForm.eSubGrupoUnique = false;
      return this.eForm.eSubGrupo = true;
    } else {
      this.eForm.eSubGrupoUnique = false;
      if (e.subgrupo.value>99 || e.subgrupo.value<10) {
        return this.eForm.eSubGrupo = true;
      } else {
        this._grupoService.getFindGroup(Math.trunc(e.subgrupo.value / 10))
          .subscribe( (resp:any) => {
            
            
            if(resp.grupo) {
              this.grupo = resp.grupo;
              this.eForm.eSubGrupo = false;
              this.eForm.eGrupo =false;
              
            } else {
              this.grupo.name = "";
              this.eForm.eSubGrupo = true;
              return this.eForm.eGrupo = true;
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
