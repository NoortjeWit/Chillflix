import { TestBed } from '@angular/core/testing';

import { FormfillGuard } from './formfill.guard';

describe('FormfillGuard', () => {
  let guard: FormfillGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormfillGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
