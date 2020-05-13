import { Injectable } from '@angular/core';

/**
 * Style configuration service
 */

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {


  /*================================================
  /	'navbar-default'  for the default light header
  / 'navbar-inverse'  for an alternative dark header								   
  /================================================*/
  /**
   * Array with header style values
   */
  private headersClass:Array<string> = ["navbar-default", "navbar-inverse"];
  /**
   * Array with class values
   */
  private colorsClass: Array<string> = ["default","classy.css","social.css","flat.css","amethyst.css","creme.css","passion.css"];
  /**
   * Array with sidebar style values
   */
  private sidebarsClass:Array<string> = ["sidebar-light"];
  
  /**
   * Initial headerClass value
   */
  public headerClass:string = "navbar-default";
  /**
   * Initial colorClass value
   */
  public colorClass:string = "default";
  /**
   * Initial sidebarClas value
   */
  public sidebarClass:string = "";

  /**
   * Initial load of style and class values
   */
  constructor() { 
    this.checkLocalStorage();
  }

  /**
   * Ckeck previus style setting in the LocalStorage
   */
  public checkLocalStorage() {
    //Check LocalStorage
    if (localStorage.getItem('headerClass')) {
      const localHeaderClass = localStorage.getItem('headerClass');
      
      if (this.headersClass.includes(localHeaderClass)) {
        this.setHeaderClass(localStorage.getItem('headerClass'));
      } 
    }
    
    //Check sidebarClass
    if (localStorage.getItem('sidebarClass')) {
      const localSidebarClass = localStorage.getItem("sidebarClass");
      
      if (this.sidebarsClass.includes(localSidebarClass)) {
        this.setSidebarClass(localStorage.getItem('sidebarClass'));
      } 
    }    

    //Ckeck colorClass
    if (localStorage.getItem('colorClass')) {
      const localColorClass = localStorage.getItem('colorClass');

      if (this.colorsClass.includes(localColorClass)) {
        this.setColorClass(localStorage.getItem('colorClass'));
      }

    }

    this.setLocalStorage();

  }

  /**
   * Save style setting in the LocalStorage
   */
  public setLocalStorage() {
    localStorage.setItem('headerClass', this.headerClass);
    localStorage.setItem('colorClass', this.colorClass);
    localStorage.setItem('sidebarClass', this.sidebarClass);
  }
  /**
   * @ignore
   */
  public getLocalStorage() {}


  /**
   * get style header class
   */

  public getHeaderClass():string{
    return this.headerClass;
  }

  /**
   * Set style header clas
   */
  public setHeaderClass(HeaderClass:string) {
    this.headerClass = HeaderClass;
  }

  /**
   * Get color style
   */
  
  public getColorClass():string {
    return this.colorClass;
  }

  /**
   * Set color style
   */

  public setColorClass(ColorClass:string) {
    this.colorClass = ColorClass;
  }

  /**
   * Get sidebar class
   */

  public getSidebarClass():string {
    return this.sidebarClass;
  }
  
  /**
   * Set color style
   */
  
  public setSidebarClass(SidebarClass:string) {
    this.sidebarClass = SidebarClass;
  }


}
