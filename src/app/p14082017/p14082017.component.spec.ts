import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P14082017Component } from './p14082017.component';

describe('P14082017Component', () => {
  let component: P14082017Component;
  let fixture: ComponentFixture<P14082017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P14082017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P14082017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
