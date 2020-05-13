import {Routes,RouterModule} from "@angular/router";
import {PagesComponent} from "./pages.component";
import { ConfigComponent } from './config/config.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user.component';

import { LoginGuardGuard } from '../services/services.index';
import { GruposComponent } from './grupos/grupos.component';
import { GrupoComponent } from './grupos/grupo.component';

/**
 * Routes child pages
 */
const pagesRoutes: Routes = [
  { path: '', 
    component:PagesComponent,
    canActivate:[LoginGuardGuard],
    children: [
      {path: 'config', component:ConfigComponent, data:{titulo:"Configuración"}},
      {path:'users', component:UsersComponent, data:{titulo:"Usuarios"}},
      {path:'user', component:UserComponent, data:{titulo:"Usuario"}},
      {path:'user/:id', component:UserComponent, data:{titulo:"Edición usuario"}},
      {path:'grupos', component:GruposComponent, data:{titulo:"Grupos contables"}},
      {path:'grupo/:id', component:GrupoComponent, data:{titulo:"Edición grupo contable"}},
      {path: 'dashboard', component:DashboardComponent, data:{titulo:"Escritorio"}},
      { path:'', redirectTo:'/dashboard', pathMatch:'full'},
    ] 
  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)
