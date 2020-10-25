import { TestBed } from '@angular/core/testing';

import { WaterboardService } from './waterboard.service';

describe('WaterboardService', () => {
  let service: WaterboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
