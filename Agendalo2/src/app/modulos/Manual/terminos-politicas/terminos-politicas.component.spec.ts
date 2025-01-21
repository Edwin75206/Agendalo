import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosPoliticasComponent } from './terminos-politicas.component';

describe('TerminosPoliticasComponent', () => {
  let component: TerminosPoliticasComponent;
  let fixture: ComponentFixture<TerminosPoliticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminosPoliticasComponent]
    });
    fixture = TestBed.createComponent(TerminosPoliticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
