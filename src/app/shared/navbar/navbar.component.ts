import { Component, OnInit } from '@angular/core';
//Function jquery
declare function sidebarApp(mode);

/**
 * Menu navbar
 */

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  /**
   * Page title
   */
  titlepage: string = "Escritorio";
  /**
   * User rol
   */
  rol:string = "Administrador";
  /**
   * Array user menu
   */
  menus:any = [
    {title:"Inbox", url:"/mail", icon:"fa fa-inbox"},
    {title:"Profile", url:"/mail", icon:"fa fa-pencil-square"},
    {title:"Media Manager", url:"/mail", icon: "fa fa-picture-o"},
    {title:""},
    {title:"Setting", url:"/mail", icon: "gi gi-settings"},
    {title:"Lock Account", url:"/mail", icon:"gi gi-lock"},
    {title:"Log out", url:"/mail", icon:"fa fa-power-off"},
  ]
  /**
   * @ignore
   */

  constructor() { }
  
  
  /**
   * @ignore
   */
  ngOnInit() {}

  /**
   * Hide menu sidebar
   * 
   * Ocultar menu sidebar
   * 
   * @param mode toggle-sidebar | null
   */

  public sidebar(mode:string) {
    sidebarApp(mode);
  }

}
