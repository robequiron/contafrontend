import { Component, OnInit } from '@angular/core';
import { ColorThemeService } from '../services/services.index';

declare function init_plugins();
declare function  colorThemePreview(themeColor,themeHeader,themeSidebar);

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {

  Init: any
  public ThemeColor:String;
  public ThemeHeader:string;
  public ThemeSidebar: String;
  //

  constructor(private colorTheme: ColorThemeService) { 

  }

  ngOnInit() {
    init_plugins();
    this.ThemeColor = this.colorTheme.getColorClass();
    this.ThemeHeader = this.colorTheme.getHeaderClass();
    this.ThemeSidebar = this.colorTheme.getSidebarClass();
    colorThemePreview(this.ThemeColor,this.ThemeHeader,this.ThemeSidebar);
  }



}
