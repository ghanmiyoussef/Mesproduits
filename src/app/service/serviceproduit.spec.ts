import { TestBed } from '@angular/core/testing';
import { Serviceproduit } from './serviceproduit';

describe('Serviceproduit', () => {
  let service: Serviceproduit;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviceproduit);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
