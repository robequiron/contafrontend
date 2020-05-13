import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/services.index';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public recuerdame: boolean = false;
  public email: string;

  constructor(
    private _usuarioService: UsuarioService, 
    private router:Router
  ) { }
    

  ngOnInit() {
    this.email = localStorage.getItem('email') || '';
    if(this.email.length > 2) {
      this.recuerdame = true;
    }
  }

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
