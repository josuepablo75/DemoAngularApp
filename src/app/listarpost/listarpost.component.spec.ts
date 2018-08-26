import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpostComponent } from './listarpost.component';

describe('ListarpostComponent', () => {
  let component: ListarpostComponent;
  let fixture: ComponentFixture<ListarpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
