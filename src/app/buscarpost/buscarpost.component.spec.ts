import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarpostComponent } from './buscarpost.component';

describe('BuscarpostComponent', () => {
  let component: BuscarpostComponent;
  let fixture: ComponentFixture<BuscarpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
