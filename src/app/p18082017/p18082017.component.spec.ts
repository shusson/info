import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P18082017Component } from './p18082017.component';

describe('P18082017Component', () => {
  let component: P18082017Component;
  let fixture: ComponentFixture<P18082017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P18082017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P18082017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
