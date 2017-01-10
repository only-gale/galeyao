/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MottoService } from './motto.service';

describe('MottoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MottoService]
    });
  });

  it('should ...', inject([MottoService], (service: MottoService) => {
    expect(service).toBeTruthy();
  }));
});
