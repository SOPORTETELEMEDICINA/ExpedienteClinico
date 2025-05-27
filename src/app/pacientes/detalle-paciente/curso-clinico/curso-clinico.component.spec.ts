import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoClinicoComponent } from './curso-clinico.component';

describe('CursoClinicoComponent', () => {
  let component: CursoClinicoComponent;
  let fixture: ComponentFixture<CursoClinicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoClinicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoClinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
