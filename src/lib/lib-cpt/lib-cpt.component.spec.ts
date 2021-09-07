import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCptComponent } from './lib-cpt.component';

describe('LibCptComponent', () => {
  let component: LibCptComponent;
  let fixture: ComponentFixture<LibCptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibCptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibCptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
