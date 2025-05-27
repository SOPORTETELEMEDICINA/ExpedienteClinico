import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaActualComponent } from './consulta-actual.component';

describe('ConsultaActualComponent', () => {
  let component: ConsultaActualComponent;
  let fixture: ComponentFixture<ConsultaActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaActualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
