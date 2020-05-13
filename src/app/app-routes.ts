import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';

/**
 * App routes
 */
const appRoutes: Routes = [
    { path:'login', component:LoginComponent},
    //{ path:'config', component:ConfigComponent},
];

//UserHash
//Habilita la estrategia de ubicación que usa el fragmento
//de URL en lugar de la API del historial.

/**
 * Export AppRoutes
 */
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true});