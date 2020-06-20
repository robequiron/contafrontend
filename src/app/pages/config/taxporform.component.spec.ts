import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxporformComponent } from './taxporform.component';

describe('TaxporformComponent', () => {
  let component: TaxporformComponent;
  let fixture: ComponentFixture<TaxporformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxporformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxporformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
