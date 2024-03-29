import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { PAGES_ROUTES } from './pages.routes';
import { ConfigComponent } from './config/config.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RoundceilPipe } from '../pipes/roundceil.pipe';
import { NgSelect2Module } from 'ng-select2';


import { UserComponent } from './users/user.component';
import { GruposComponent } from './grupos/grupos.component';
import { GrupoComponent } from './grupos/grupo.component';
import { SubgruposComponent } from './subgrupos/subgrupos.component';
import { SubgrupoComponent } from './subgrupos/subgrupo.component';
import { LoadTableComponent } from './tables/load-table.component';
import { NotfoundComponent } from './tables/notfound.component';
import { SubcuentasComponent } from './subcuentas/subcuentas.component';
import { SubcuentaComponent } from './subcuentas/subcuenta.component';
import { ContabilidadComponent } from './config/contabilidad.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { CuentaComponent } from './cuentas/cuenta.component';
import { TaxComponent } from './config/tax/tax.component';
import { TaxformComponent } from './config/tax/taxform.component';
import { TaxporformComponent } from './config/tax/taxporform.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ViasComponent } from './config/vias/vias.component';
import { ViaComponent } from './config/vias/via.component';
import { GeneralComponent } from './config/general/general.component';
import { ConfigModule } from './config/config.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    ConfigComponent,
    DashboardComponent,
    UsersComponent,
    UserComponent,
    GruposComponent,
    GrupoComponent,
    SubgruposComponent,
    SubgrupoComponent,
    LoadTableComponent,
    NotfoundComponent,
    SubcuentasComponent,
    SubcuentaComponent,
    ContabilidadComponent,
    CuentasComponent,
    CuentaComponent,
    TaxComponent,
    TaxformComponent,
    TaxporformComponent,
    ViasComponent,
    ViaComponent,
    RoundceilPipe
    
    
    
    
  ],
  
  imports: [
    PAGES_ROUTES,
    CommonModule,
    FormsModule,
    ConfigModule,
    NgxPaginationModule,
    NgSelect2Module,
   
    BsDatepickerModule.forRoot()
  ]
})
export class PagesModule { }
