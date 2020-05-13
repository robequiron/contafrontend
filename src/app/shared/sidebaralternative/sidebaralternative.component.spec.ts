import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaralternativeComponent } from './sidebaralternative.component';

describe('SidebaralternativeComponent', () => {
  let component: SidebaralternativeComponent;
  let fixture: ComponentFixture<SidebaralternativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebaralternativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebaralternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
