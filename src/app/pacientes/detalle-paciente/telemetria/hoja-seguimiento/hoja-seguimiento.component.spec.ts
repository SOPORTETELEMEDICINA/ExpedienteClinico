import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaSeguimientoComponent } from './hoja-seguimiento.component';

describe('HojaSeguimientoComponent', () => {
  let component: HojaSeguimientoComponent;
  let fixture: ComponentFixture<HojaSeguimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HojaSeguimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HojaSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
