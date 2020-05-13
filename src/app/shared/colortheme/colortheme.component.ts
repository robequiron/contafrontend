import { Component, OnInit, Inject } from '@angular/core';
import { ColorThemeService } from 'src/app/services/services.index';
declare function  colorThemePreview(themeColor,themeHeader,themeSidebar);

/**
 * Page style settings
 * 
 * Configuración estilos de la página
 */

@Component({
  selector: 'app-colortheme',
  templateUrl: './colortheme.component.html',
  styles: []
})
export class ColorthemeComponent implements OnInit {
  /**
   * Constructor 
   * 
   * @param colorTheme Style configuration service
   */
  constructor(private colorTheme: ColorThemeService) { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * Saved style settings
   * 
   * Grabar configuración de estilos
   * 
   * @param ThemeHeader navbar-default | navbar-inverse
   * @param ThemeColor default | classy.css | social.css | flat.css | amethyst.css | creme.css | passion.css
   * @param ThemeSidebar sidebar-light | null
   */

  public setTheme(ThemeHeader:string,ThemeColor:string, ThemeSidebar:string) {
    
      this.colorTheme.setHeaderClass(ThemeHeader);
      this.colorTheme.setColorClass(ThemeColor);
      this.colorTheme.setSidebarClass(ThemeSidebar);
      this.colorTheme.setLocalStorage();
      colorThemePreview(ThemeColor,ThemeHeader,ThemeSidebar);
  }

}
