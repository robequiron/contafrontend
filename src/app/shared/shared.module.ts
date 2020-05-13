import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ColorthemeComponent } from './colortheme/colortheme.component';
import { SidebarfooterComponent } from './sidebarfooter/sidebarfooter.component';
import { SidebaralternativeComponent } from './sidebaralternative/sidebaralternative.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    ColorthemeComponent,
    SidebarfooterComponent,
    SidebaralternativeComponent,
    NavbarComponent,
  ],
  exports:[
    SidebarComponent,
    NavbarComponent,
  ],
  
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
