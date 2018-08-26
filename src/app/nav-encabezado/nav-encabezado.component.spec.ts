import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEncabezadoComponent } from './nav-encabezado.component';

describe('NavEncabezadoComponent', () => {
  let component: NavEncabezadoComponent;
  let fixture: ComponentFixture<NavEncabezadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavEncabezadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
