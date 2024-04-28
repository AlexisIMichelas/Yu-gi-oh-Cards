import { TestBed } from '@angular/core/testing';

import { YGOPRODeckService } from './ygoprodeck.service';

describe('YGOPRODeckService', () => {
  let service: YGOPRODeckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YGOPRODeckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
