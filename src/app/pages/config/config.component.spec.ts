import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSelect2Component, NgSelect2Module } from 'ng-select2';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { RoundceilPipe } from 'src/app/pipes/roundceil.pipe';
import { LoadTableComponent } from '../tables/load-table.component';
import { NotfoundComponent } from '../tables/notfound.component';

import { ConfigComponent } from './config.component';
import { ContabilidadComponent } from './contabilidad.component';
import { GeneralComponent } from './general/general.component';
import { TaxComponent } from './tax/tax.component';
import { TaxformComponent } from './tax/taxform.component';
import { TaxporformComponent } from './tax/taxporform.component';
import { ViaComponent } from './vias/via.component';
import { ViasComponent } from './vias/vias.component';

describe('ConfigComponent', () => {
  let component: ConfigComponent;
  let fixture: ComponentFixture<ConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigComponent,ContabilidadComponent,TaxComponent,TaxformComponent,
      ViasComponent,ViaComponent, TaxporformComponent,NotfoundComponent,LoadTableComponent,GeneralComponent
      ],
      imports: [FormsModule,NgxPaginationModule,NgSelect2Module,RouterTestingModule,PipesModule,HttpClientTestingModule],
      providers:[RoundceilPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
