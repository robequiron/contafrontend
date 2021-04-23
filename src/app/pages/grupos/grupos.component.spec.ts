import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { RoundceilPipe } from 'src/app/pipes/roundceil.pipe';
import { LoadTableComponent } from '../tables/load-table.component';
import { NotfoundComponent } from '../tables/notfound.component';

import { GruposComponent } from './grupos.component';

describe('GruposComponent', () => {
  let component: GruposComponent;
  let fixture: ComponentFixture<GruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposComponent,NotfoundComponent,LoadTableComponent ],
      imports:[RouterTestingModule,NgxPaginationModule,FormsModule,PipesModule,HttpClientTestingModule],
      providers:[RoundceilPipe,PaginatePipe]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
