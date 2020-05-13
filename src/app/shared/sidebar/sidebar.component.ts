import { Component, OnInit } from '@angular/core';
import { MenuSidebarService } from 'src/app/services/services.index';
/**
 * Main menu of the application
 * 
 * Menu principal de la aplicación
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})

export class SidebarComponent implements OnInit {

  /**
   * Variables de inicio
   * 
   * @param menus Array con los elementos del menu
   */
  menus:any;
  
  
  /**
   * Constructor
   * 
   * @param menuSidebar Service to get the menu data
   */
  constructor(private menuSidebar:MenuSidebarService) { }

  /**
   * @ignore
   */
  
  ngOnInit() {
    /*================================================
    /	Get service menu											   
    /================================================*/
    this.menus = this.menuSidebar.menus;
  }

  /**
   * Show submenu options
   * 
   * Mostrar submenu con las opciones disponibles
   * 
   * @param a HTML element
   * 
   */
  public getSubmenu(a:any) {
    let selectores: any = document.getElementsByClassName("sidebar-nav-menu");

    if(a.classList.contains('open')){
      a.classList.remove('open');
    } else {
      for (let a of selectores) {
        a.classList.remove('open');
      }
      a.classList.add('open');
    }

  }

  
  /**
   * Show item submenu
   * 
   * Mostrar items del submenu
   * 
   * @param a HTML element
   */
  public getItems(a:any) {
    let selectores: any = document.getElementsByClassName("sidebar-nav-submenu");
    if(a.classList.contains('open')) {
      a.classList.remove('open');
    } else {
      for (let a of selectores) {
        a.classList.remove('open');
      }
      a.classList.add('open');
    }
  }

}
