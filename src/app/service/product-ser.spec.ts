import { TestBed } from '@angular/core/testing';

import { ProductSer } from './product-ser';

describe('ProductSer', () => {
  let service: ProductSer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
