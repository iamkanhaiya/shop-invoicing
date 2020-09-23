import { TestBed } from '@angular/core/testing';

import { kanhaiyaService } from './kanhaiya.service';

describe('kanhaiyaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: kanhaiyaService = TestBed.get(kanhaiyaService);
    expect(service).toBeTruthy();
  });
});
