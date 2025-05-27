import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetriaComponent } from './telemetria.component';

describe('TelemetriaComponent', () => {
  let component: TelemetriaComponent;
  let fixture: ComponentFixture<TelemetriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelemetriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelemetriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
