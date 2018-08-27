import { TestBed, inject } from '@angular/core/testing';

import { ServicioappService } from './servicioapp.service';

describe('ServicioappService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioappService]
    });
  });

  it('should be created', inject([ServicioappService], (service: ServicioappService) => {
    expect(service).toBeTruthy();
  }));
});
