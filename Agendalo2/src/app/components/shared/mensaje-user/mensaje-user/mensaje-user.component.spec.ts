import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeUserComponent } from './mensaje-user.component';

describe('MensajeUserComponent', () => {
  let component: MensajeUserComponent;
  let fixture: ComponentFixture<MensajeUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeUserComponent]
    });
    fixture = TestBed.createComponent(MensajeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
