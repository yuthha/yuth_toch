import { TestBed } from '@angular/core/testing';

import { CartSer } from './cart-ser';

describe('CartSer', () => {
  let service: CartSer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartSer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
