import { Injectable } from '@angular/core';

@Injectable()
export class IntroductionService {

    constructor() { }

    private _default_hobbies = [
        'Java.',
        'Type Script.',
        'Java Script.',
        'Animation.',
        'Symphony Music.',
        'Movies.'
    ];

    public getHobbies(): string[] {
        return this._default_hobbies;
    }
}
