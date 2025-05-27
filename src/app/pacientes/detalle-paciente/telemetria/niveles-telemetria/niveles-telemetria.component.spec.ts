import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelesTelemetriaComponent } from './niveles-telemetria.component';

describe('NivelesTelemetriaComponent', () => {
  let component: NivelesTelemetriaComponent;
  let fixture: ComponentFixture<NivelesTelemetriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NivelesTelemetriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelesTelemetriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
