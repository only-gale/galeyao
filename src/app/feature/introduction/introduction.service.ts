import { Injectable } from '@angular/core';

@Injectable()
export class IntroductionService {

  constructor() { }

  getHobbies() {
    return [
      'Type Script.',
      'Ambient Music.',
      'Animation.',
      'Watching movies.'
    ];
  }
}
