import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualEmpresaComponent } from './manual-empresa.component';

describe('ManualEmpresaComponent', () => {
  let component: ManualEmpresaComponent;
  let fixture: ComponentFixture<ManualEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualEmpresaComponent]
    });
    fixture = TestBed.createComponent(ManualEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
