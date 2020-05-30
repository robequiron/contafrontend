import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styles: []
})
export class ConfigComponent implements OnInit {

  public title:string ="Configuración general"

  public navbar = [
    {title:"Datos empresa", active:true},
    {title:"Contabilidad" , active:false},
  ]

  constructor() { }

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
