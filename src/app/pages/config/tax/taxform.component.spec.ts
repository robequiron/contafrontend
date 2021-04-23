import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TaxformComponent } from './taxform.component';

describe('TaxformComponent', () => {
  let component: TaxformComponent;
  let fixture: ComponentFixture<TaxformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxformComponent ],
      imports:[FormsModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));
  /*
  beforeEach(() => {
    fixture = TestBed.createComponent(TaxformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
