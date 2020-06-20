import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Imports modules
import { FormsModule} from '@angular/forms';




//Routes
import { APP_ROUTES} from './app-routes';
import { PAGES_ROUTES } from './pages/pages.routes';




import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';

//Servicios
import { ServicesModule } from './services/services.module';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptors/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule,
    ServicesModule,
    FormsModule,
    HttpClientModule,
    PAGES_ROUTES,
    APP_ROUTES,
    BrowserAnimationsModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
