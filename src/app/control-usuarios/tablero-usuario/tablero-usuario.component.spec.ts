import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroUsuarioComponent } from './tablero-usuario.component';

describe('TableroUsuarioComponent', () => {
  let component: TableroUsuarioComponent;
  let fixture: ComponentFixture<TableroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
