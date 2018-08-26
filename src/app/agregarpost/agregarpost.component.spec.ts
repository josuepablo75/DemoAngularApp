import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarpostComponent } from './agregarpost.component';

describe('AgregarpostComponent', () => {
  let component: AgregarpostComponent;
  let fixture: ComponentFixture<AgregarpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
