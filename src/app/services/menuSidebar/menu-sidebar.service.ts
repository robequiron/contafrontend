import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuSidebarService {

  menus:any = [
    { title:"Escritorio", url:'/dashboard' , icon:"gi gi-compass sidebar-nav-icon"},
    { title:"Configuración",  url:'', icon:"gi gi-user sidebar-nav-icon",
      submenu:[
        {title:"Usuarios", 
          items:[
            {title:"Consulta", url:"/users"},
            {title:"Nuevo", url:"/user/nuevo"}
          ]
        }
      ]
    },

    { title:"Email Center", url:'/email' , icon:"gi gi-inbox sidebar-nav-icon"},
    { title:"", url:'' , icon:"gi gi-compass sidebar-nav-icon"},
    { title:"Cuentas contables", url:'', icon:"fa fa-rocket ",
      submenu: [
        {title:"Grupos", url:"",
          items:[
            {title:"Consulta", url:"/grupos"},
            {title:"Nuevo", url:"/grupo/nuevo"},
          ]
        },
        {title:"Subgrupos", url:"/elemets", 
         items:[
           {title:"Blocks", url:"/"},
           {title:"Typography", url:"/typo"},
         ]
        },
        {title:"Forms", url:"/subelemets"},
        {title:"Icon Packs", url:"/iconelemet"},
      ]
    },
    { title:"User Interface", url:'', icon:"fa fa-rocket ",
      submenu: [
        {title:"Widgets", url:"/widgets"},
        {title:"Elements", url:"/elemets", 
         items:[
           {title:"Blocks", url:"/"},
           {title:"Typography", url:"/typo"},
         ]
        },
        {title:"Forms", url:"/subelemets"},
        {title:"Icon Packs", url:"/iconelemet"},
      ]
    },
  ]


  constructor() { }
}
