import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPacientesNoAtendidosComponent } from './lista-pacientes-no-atendidos.component';

describe('ListaPacientesNoAtendidosComponent', () => {
  let component: ListaPacientesNoAtendidosComponent;
  let fixture: ComponentFixture<ListaPacientesNoAtendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPacientesNoAtendidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPacientesNoAtendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
