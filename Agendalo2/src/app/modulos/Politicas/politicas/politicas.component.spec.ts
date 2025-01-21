import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasComponent } from './politicas.component';

describe('PoliticasComponent', () => {
  let component: PoliticasComponent;
  let fixture: ComponentFixture<PoliticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticasComponent]
    });
    fixture = TestBed.createComponent(PoliticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
