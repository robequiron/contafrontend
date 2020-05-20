import { Component, OnInit } from '@angular/core';
import { UserService, ConfigService } from 'src/app/services/services.index';
import { UserTable } from 'src/app/models/tables/users.model';
import Swal from 'sweetalert2';

/**
 * Component to show app users
 */

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
  //TODO:Establecer orden de aparición
  
  /**
   * Data loaded
   */
  public loaded:boolean = false;
  /**
   * Class table
   */
  public classTable:string ="";

  /**
   * Table title
   */
  public title:String= "Usuarios";
  /**
   * Item per page
   */
  public itemsPerPage:number;
  /**
   * Total pages
   */
  public totalPages: number
  /**
   * Actual page
   */
  public p:number = 1;
  /**
   * Search name user
   */
  public nameSearch:string ="";
  /**
   * Search email
   */
  public emailSearch: string = "";

  /**
   * Users total
   */
  public count:number;
  
  /**
   * Users
   */
  users: any;
  
  /**
   * Constructor
   * 
   * @param _users Inyect UserService
   * @param _config Inyect ConfigService
   */
  constructor(private _users:UserService, 
              private _config:ConfigService) { }


  /**
  *  @ignore
  */            
  ngOnInit() {
    this.getConfig();
    this.getUsers();
  }
  
  /**
   * Loads default from tables		
   */
  public getConfig() {
    this.itemsPerPage = this._config.getLimitTable();
    this.classTable = this._config.getclassTable();
  }

  /**
   * Set items per page
   * 
   * Items por página
   * @param n Page number
   */
  public setItemPerPage(n:number):void {
    this.itemsPerPage = n;
  }

  /**
   * Remove User
   * 
   * @param id Id user
   */
  public removeUser(id:string):void {
   
   
    Swal.fire({
      icon:'question',
      title: '¿Seguro...?',
      text:'De eliminar el usuario',
      showCancelButton:true,
      showConfirmButton:true,
    }).then(resp=>{
      if(resp.value) {
        this._users.deleteUser(id).subscribe(
          (resp)=>{
            Swal.fire({
            icon:'info',
            title:'Eliminado correctamente',
            timer:1000
            })
            this.getUsers();
          },
          ()=>{
            Swal.fire({
            icon:'warning',
            title:'Error',
            text: 'Al eliminar el usuario',
            })
          })
      }
    })
    
  }

  /**
   * Get Users
   */  
  public getUsers(){
    this._users.getUsers(this.nameSearch,this.emailSearch)
    .subscribe(
      (resp:UserTable)=>{
      this.count = resp.count;
      this.users= resp.users;  
     },
     null,
     ()=>{this.loaded=true;}
    )
  }

  /**
   * Delete search parameters
   */
  public clearSearch() {
    this.nameSearch = '';
    this.emailSearch = '';
    this.getUsers();
  }


}
