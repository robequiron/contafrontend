import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/services.index';

import Swal from 'sweetalert2';

/**
 * Component check that the user is logged in correctly
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  /**
   * remember me
   */
  public recuerdame: boolean = false;

  /**
   * Email
   */
  public email: string;

  /**
   * Constructor
   * 
   * @param _usuarioService Inyect UsuarioService
   * @param router Router
   */
  constructor(
    private _usuarioService: UsuarioService, 
    private router:Router
  ) { }
    
  /**
   * @ignore
   */
  ngOnInit() {
    this.email = localStorage.getItem('email') || '';
    if(this.email.length > 2) {
      this.recuerdame = true;
    }
  }

  /**
   * Validate form and redirect user
   * 
   * @param forma NgForm
   */
  public login(forma: NgForm) {
    /*================================================
    /	If the form is invalid											   
    /================================================*/
    if (forma.invalid) {
      return;
    }

    /*================================================
    /	Create user model							   
    /================================================*/
    let usuario = new Usuario(null, forma.value.email, forma.value.password);

    /*================================================
    /	We subcribe to the login services											   
    /================================================*/
    this._usuarioService.login(usuario, forma.value.recuerdame)
    .subscribe( 
      (resp) =>{
        if (resp) {
          this.router.navigate(['/dashboard']);
        } 
    },
      () => {
        Swal.fire({
        icon:'warning',
        title:'Error',
        text: "Usuario o/y password incorrecto",
        })
      }
    )
  }

}
