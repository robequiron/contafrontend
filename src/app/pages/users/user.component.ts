import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/services.index';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
/**
 * Component to modify or create new users
 */

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  /**
   * User model
   */

  public usuario: Usuario = new Usuario('','','','');
  
  /**
   * Form title
   */
  public title:String= "Usuario";
  /**
   * Roles
   */
  public roles:any;

  /**
   * Object error form
   */
  public eForm= {
    eName :false,
    eEmail: false,
    eEmailUnique: false,
    password:false,
    rol:false,
  }

  /**
   * Constructor
   * 
   * @param _userService User Service
   * @param activatedRoutes Observable routes
   */
  constructor(
    public _userService:UserService,
    public activatedRoutes:ActivatedRoute
    ) { 
      activatedRoutes.params.subscribe( params => {
        let id = params['id'];
        if(id!=='nuevo') {
          this.loadUser(id);
        }
      })
    }

  /**
   * @ignore
   */
  ngOnInit() {
    this.roles = this._userService.ROLES;
  }

  /**
   * Load data user
   * 
   * @param id Identifier user
   */

  public loadUser(id:string) {
    this._userService.getUser(id).subscribe(
      (resp:Usuario) => {
        this.usuario = resp;
      }
    )
  }

  /**
   * Create or update user 
   * 
   * @param f Object form
   */
  public grabar(f:NgForm) {
    if(f.valid) {
       if (f.form.controls.rol.value===undefined) {
         this.eForm.rol = true;
         return;
       } 
         if (this.usuario._id==='') {
           this.usuario.password=f.form.value.password;
         }
         this.usuario.email=f.form.value.email;
         this.usuario.rol=f.form.value.rol;
         this.usuario.name=f.form.value.name;
         this.usuario._id=f.form.controls._id.value;

         this._userService.saveUser(this.usuario).subscribe(
           ((resp:any)=>{
             this.usuario = resp.usuario;
             Swal.fire({
              icon:'info',
              title:'Usuario grabado correctamente',
              timer: 1500
              })
           }),
           (err)=>{
              if(err.error.error.errors.email.kind==="unique") {
                this.eForm.eEmail= true;
                this.eForm.eEmailUnique= true;
              }
           }
         )
     }
  }

  /**
   * New user
   */
  public newUser() {
    this.usuario._id='';
    this.usuario.name='';
    this.usuario.email='';
    this.usuario.password='';
    this.usuario.rol='';
  }

  /**
   * Form field validation
   * 
   * @param e Object form
   */
  public onFocusOut(e:any){

    if (e.name.touched && !e.name.valid) {
      return this.eForm.eName= true;
    } else {
      this.eForm.eName = false;
    }

    if (e.email.touched && !e.email.valid) {
       return this.eForm.eEmail = true;
    } else {
      this.eForm.eEmail = false;
    }

    if (!this.usuario._id) {
      if (e.password.touched && !e.password.valid) {
        return this.eForm.password = true;
      } else {
        this.eForm.password = false;  
      }
    }

    if (e.rol.touched && !e.rol.valid) {
      return this.eForm.rol = true;
    } else {
      this.eForm.rol = false;  
    }

  }

}
