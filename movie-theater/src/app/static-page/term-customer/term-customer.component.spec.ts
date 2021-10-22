import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermCustomerComponent } from './term-customer.component';

describe('TermCustomerComponent', () => {
  let component: TermCustomerComponent;
  let fixture: ComponentFixture<TermCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
