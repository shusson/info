import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P04082017Component } from './p04082017.component';

describe('P04082017Component', () => {
  let component: P04082017Component;
  let fixture: ComponentFixture<P04082017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P04082017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P04082017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
