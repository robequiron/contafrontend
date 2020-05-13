import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { PAGES_ROUTES } from './pages.routes';
import { ConfigComponent } from './config/config.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RoundceilPipe } from '../pipes/roundceil.pipe';
import { UserComponent } from './users/user.component';
import { NgSelect2Module } from 'ng-select2';
import { GruposComponent } from './grupos/grupos.component';
import { GrupoComponent } from './grupos/grupo.component';



@NgModule({
  declarations: [
    ConfigComponent,
    DashboardComponent,
    RoundceilPipe,
    UsersComponent,
    UserComponent,
    GruposComponent,
    GrupoComponent
  ],
  
  imports: [
    PAGES_ROUTES,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    NgSelect2Module
  
  ]
})
export class PagesModule { }
