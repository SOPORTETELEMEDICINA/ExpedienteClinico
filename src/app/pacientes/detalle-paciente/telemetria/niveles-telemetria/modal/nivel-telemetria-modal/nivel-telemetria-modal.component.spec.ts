import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelTelemetriaModalComponent } from './nivel-telemetria-modal.component';

describe('NivelTelemetriaModalComponent', () => {
  let component: NivelTelemetriaModalComponent;
  let fixture: ComponentFixture<NivelTelemetriaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NivelTelemetriaModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelTelemetriaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
