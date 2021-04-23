import { Component, OnInit } from '@angular/core';
import { Via } from 'src/app/models/via.model';


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
    {title:"Impuestos", active:false},
    {title:"Parámetros generales", active:true,}
  ]

 public param= ["Vías"]; 

 /**
  * Form visible
  */
 public visForm:boolean=false;

 public visParamGeneral:string = "";

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

  public visform() {
    console.log("Cambiamos")
    this.visForm = false;
  }

  public ViaForm(via:Via) {
    this.visForm = true;
  }

  public closeForm(e:boolean) {
    this.visForm = e;
  }

  


}
