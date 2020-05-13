import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { Observable } from 'rxjs/internal/Observable';
import { resolve } from 'url';

@Injectable()
export class LoginGuardGuard implements CanActivate {


  constructor(
    public route: Router,
    public _usuarioService:UsuarioService) {}
  
  canActivate(): Promise<boolean> | boolean {

    if (this._usuarioService.islogin()) {
      this.verificarToken()
      .then( ()=>{
        return true;
      })
      .catch( ()=>{
        this.route.navigate(['/login'])
        return false;
      })
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }

  }

  private verificarToken(): Promise<boolean> {
    return new Promise ( (resolve, reject) => {
      
      this._usuarioService.isToken().subscribe(
        ()=>{
          resolve(true);
        },
        () =>{
          reject(false);
        }
      );
    })
  }



}
