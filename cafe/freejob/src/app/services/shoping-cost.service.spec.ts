import { TestBed } from '@angular/core/testing';

import { ShopingCostService } from './shoping-cost.service';

describe('ShopingCostService', () => {
  let service: ShopingCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopingCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
