import { Injectable } from '@angular/core';
import { TypewriterContent } from "../../shared/po/typewriter.content";

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

    public getHobbies() {
        return this.formatHobbies(this._default_hobbies);
    }

    private formatHobbies( hobbies: string[] ): TypewriterContent[] {
        return hobbies.map(( v: string ) => new TypewriterContent(v));
    }
}
