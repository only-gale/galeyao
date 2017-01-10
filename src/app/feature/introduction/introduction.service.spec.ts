/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IntroductionService } from './introduction.service';

describe('IntroductionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntroductionService]
    });
  });

  it('should ...', inject([IntroductionService], (service: IntroductionService) => {
    expect(service).toBeTruthy();
  }));
});
