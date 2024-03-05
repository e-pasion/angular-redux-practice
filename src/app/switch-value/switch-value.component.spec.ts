import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchValueComponent } from './switch-value.component';

describe('SwitchValueComponent', () => {
  let component: SwitchValueComponent;
  let fixture: ComponentFixture<SwitchValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchValueComponent]
    });
    fixture = TestBed.createComponent(SwitchValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
