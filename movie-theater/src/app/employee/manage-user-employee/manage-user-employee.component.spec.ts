import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserEmployeeComponent } from './manage-user-employee.component';

describe('ManageUserEmployeeComponent', () => {
  let component: ManageUserEmployeeComponent;
  let fixture: ComponentFixture<ManageUserEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
