import { Component, OnInit } from '@angular/core';


/**
 * Show General application settings
 */
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styles: []
})
export class ConfigComponent implements OnInit {

  /**
   * Navbar
   */
  public navbar = [
    {title:"Datos empresa", active:false},
    {title:"Contabilidad" , active:false},
    {title:"Impuestos", active:true}
  ]
  /**
   * Constructor
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit() {
 
  }

 /**
 * Set active navbar tab
 * 
 * @param i: Identify tag
 */ 
  public setnavbar(i:number) {
    this.navbar.forEach(navbar => {navbar.active=false;});
    this.navbar[i].active=true;
  }

}
