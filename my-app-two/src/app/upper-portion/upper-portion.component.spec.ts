import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperPortionComponent } from './upper-portion.component';

describe('UpperPortionComponent', () => {
  let component: UpperPortionComponent;
  let fixture: ComponentFixture<UpperPortionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperPortionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperPortionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
