import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { RoundceilPipe } from 'src/app/pipes/roundceil.pipe';
import { LoadTableComponent } from '../../tables/load-table.component';
import { NotfoundComponent } from '../../tables/notfound.component';

import { ViasComponent } from './vias.component';

describe('ViasComponent', () => {
  let component: ViasComponent;
  let fixture: ComponentFixture<ViasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViasComponent,LoadTableComponent,NotfoundComponent ],
      imports: [ NgxPaginationModule,RouterTestingModule,FormsModule,PipesModule,HttpClientTestingModule],
      providers:[RoundceilPipe,PaginatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
