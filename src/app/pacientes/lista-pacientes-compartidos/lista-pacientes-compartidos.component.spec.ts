import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPacientesCompartidosComponent } from './lista-pacientes-compartidos.component';

describe('ListaPacientesCompartidosComponent', () => {
  let component: ListaPacientesCompartidosComponent;
  let fixture: ComponentFixture<ListaPacientesCompartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPacientesCompartidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPacientesCompartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
