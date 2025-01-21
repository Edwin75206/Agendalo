import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarServiciosComponent } from './editar-servicios.component';

describe('EditarServiciosComponent', () => {
  let component: EditarServiciosComponent;
  let fixture: ComponentFixture<EditarServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarServiciosComponent]
    });
    fixture = TestBed.createComponent(EditarServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
