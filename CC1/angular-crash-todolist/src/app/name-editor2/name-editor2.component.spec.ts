import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEditor2Component } from './name-editor2.component';

describe('NameEditor2Component', () => {
  let component: NameEditor2Component;
  let fixture: ComponentFixture<NameEditor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameEditor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameEditor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
