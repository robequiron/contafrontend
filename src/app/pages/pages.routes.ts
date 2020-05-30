import {Routes,RouterModule} from "@angular/router";
import {PagesComponent} from "./pages.component";
import { ConfigComponent } from './config/config.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user.component';

import { LoginGuardGuard } from '../services/services.index';
import { GruposComponent } from './grupos/grupos.component';
import { GrupoComponent } from './grupos/grupo.component';
import { SubgruposComponent } from './subgrupos/subgrupos.component';
import { SubgrupoComponent } from './subgrupos/subgrupo.component';
import { SubcuentasComponent } from './subcuentas/subcuentas.component';
import { SubcuentaComponent } from './subcuentas/subcuenta.component';

/**
 * Routes child pages
 */
const pagesRoutes: Routes = [
  { path: '', 
    component:PagesComponent,
    canActivate:[LoginGuardGuard],
    children: [
      {path:'config', component:ConfigComponent, data:{titulo:"Configuración"}},
      {path:'users', component:UsersComponent, data:{titulo:"Usuarios"}},
      {path:'user', component:UserComponent, data:{titulo:"Usuario"}},
      {path:'user/:id', component:UserComponent, data:{titulo:"Edición usuario"}},
      {path:'grupos', component:GruposComponent, data:{titulo:"Grupos contables"}},
      {path:'grupo/:id', component:GrupoComponent, data:{titulo:"Edición grupo contable"}},
      {path:'subgrupos', component:SubgruposComponent, data:{titulo:"Subgrupos contables"}},
      {path:'subgrupo/:id', component:SubgrupoComponent, data:{titulo:"Edición subgrupo contable"}},
      {path:'subcuentas', component:SubcuentasComponent, data:{titulo:"Subcuentas contables"}},
      {path:'subcuenta/:id', component:SubcuentaComponent, data:{titulo:"Edición subcuenta contable"}},
      {path: 'dashboard', component:DashboardComponent, data:{titulo:"Escritorio"}},
      { path:'', redirectTo:'/dashboard', pathMatch:'full'},
    ] 
  },
];

/**
 * Export PAGES_ROUTES
 */
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)
