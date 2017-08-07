import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P07082017Component } from './p07082017.component';

describe('P07082017Component', () => {
  let component: P07082017Component;
  let fixture: ComponentFixture<P07082017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P07082017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P07082017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
