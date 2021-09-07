import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCpt2Component } from './lib-cpt2.component';

describe('LibCpt2Component', () => {
  let component: LibCpt2Component;
  let fixture: ComponentFixture<LibCpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibCpt2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibCpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
