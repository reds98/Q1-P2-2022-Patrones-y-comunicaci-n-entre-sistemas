import { TestBed } from '@angular/core/testing';

import { InfoEmpleadosService } from './info-empleados.service';

describe('InfoEmpleadosService', () => {
  let service: InfoEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
