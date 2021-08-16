import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Usuario } from 'src/app/models/usuario.model';
import { map } from 'rxjs/operators';
/**
 * Services for requests with the server - Users
 */

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * Roles
   */

  public ROLES =['ADMIN_ROLE','SUPER_ROLE','USER_ROLE'];

  /**
   * Constructor user service
   * 
   * @param http Service HttpClient
   */
  constructor(private http:HttpClient) { }

  /**
   * Get users
   * 
   * Obtener usuarios
   * 
   * @param name Name user 
   * @param email Email user
   * @example
   * getUsers(test,test@test.com)
   */
  public getUsers(name:string, email:string) {
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/users?from=0&limit=100&name=${name}&email=${email}&token=${token}`;
    return this.http.get(url);
  }

  /**
   * Load user data
   * 
   * @param id Identifier user
   */
  public getUser(id:string) {
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + `/users/${id}?token=${token}`;
    return this.http.get(url).pipe(
      map( (resp:any)=>{
        return resp.usuario;
      })
    );
  }





  /**
   * Delete user
   * 
   * Borrar el usuario
   * 
   * @param id Id user
   */
  public deleteUser(id:string) {
    let token = localStorage.getItem('token');
    let url = URL_SERVICIOS + '/users/' + id + '?token=' + token;
    return this.http.delete(url);
  }

  /**
   * Create new user and update user
   * 
   * @param usuario Usuario model
   */

  public saveUser(usuario:Usuario) {
    
    let token = localStorage.getItem('token');
    if(usuario._id){
      let url = URL_SERVICIOS + '/users/' + usuario._id + '?token=' + token;
      return this.http.put(url, usuario);
    } else {
      let url = URL_SERVICIOS + '/users?token=' + token;
      return this.http.post(url, usuario); 
    }
  }


}
