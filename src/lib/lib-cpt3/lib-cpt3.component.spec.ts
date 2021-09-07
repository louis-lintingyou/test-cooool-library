import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCpt3Component } from './lib-cpt3.component';

describe('LibCpt3Component', () => {
  let component: LibCpt3Component;
  let fixture: ComponentFixture<LibCpt3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibCpt3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibCpt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
