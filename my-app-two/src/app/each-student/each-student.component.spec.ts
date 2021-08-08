import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachStudentComponent } from './each-student.component';

describe('EachStudentComponent', () => {
  let component: EachStudentComponent;
  let fixture: ComponentFixture<EachStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
