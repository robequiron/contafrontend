import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token:string;
  
  constructor(public http: HttpClient) { this.getLocalStorage() }



  public islogin(){
    return (this.token.length >5) ? true:false;
  }

  /*================================================
  /	Ckeck the validity of the token											   
  /================================================*/
  public isToken() {
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + '/login?token='+ token;
    return this.http.get(url).pipe(
      map( 
        (resp:any)=>{
          return true;
        },
        () => {
          return false;
        }
      )
    );
  }

  /*================================================
  /	Read item localStorage											   
  /================================================*/
  public getLocalStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token ='';
      this.usuario= null;
    }
  }

  /*================================================
  /	Login user											   
  /================================================*/
  public login(usuario:Usuario, recordar: boolean = false) {
    if (recordar) {
      localStorage.setItem('email', usuario.email.toString());
    } else {
      localStorage.removeItem('email');
    }
    
    let url = URL_SERVICIOS + '/login';
    return this.http.post(url,usuario).pipe(
      map( (resp:any)=>{

        localStorage.setItem('id', resp.id);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario', JSON.stringify(resp.usuario));
        return true;
      })
    )
  }



  //TODO:Falta actualizar token vencido.
}
