import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorThemeService } from './colorTheme/color-theme.service';
import { MenuSidebarService } from './menuSidebar/menu-sidebar.service';
import { UsuarioService } from './usuario/usuario.service';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { UserService } from './users/user.service';
import { ConfigService } from './config/config.service';
import { GruposService } from './grupos/grupos.service';
import { SubgruposService } from './subgrupos/subgrupos.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ColorThemeService,
    MenuSidebarService,
    UsuarioService,
    LoginGuardGuard,
    UserService,
    ConfigService,
    GruposService,
    SubgruposService,
  ]
})
export class ServicesModule { }
