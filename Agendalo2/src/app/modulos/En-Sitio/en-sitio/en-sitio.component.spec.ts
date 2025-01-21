import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnSitioComponent } from './en-sitio.component';

describe('EnSitioComponent', () => {
  let component: EnSitioComponent;
  let fixture: ComponentFixture<EnSitioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnSitioComponent]
    });
    fixture = TestBed.createComponent(EnSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
