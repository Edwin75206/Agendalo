import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualComponent } from './manual.component';

describe('ManualComponent', () => {
  let component: ManualComponent;
  let fixture: ComponentFixture<ManualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualComponent]
    });
    fixture = TestBed.createComponent(ManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
