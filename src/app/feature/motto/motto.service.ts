import { Injectable } from '@angular/core';
import { TypewriterContent } from "../../shared/po/typewriter.content";

@Injectable()
export class MottoService {

    constructor() {
    }

    private _default = [
        "They say,",
        "There are only 10 types of people in the world:",
        "Those who understand binary, and those who don't.",
        "I'm proud of being one of the former.",
        "What about you?"
    ];

    public getMotto() {
        return this.formatMotto(this._default);
    }

    private formatMotto( motto: string[] ): TypewriterContent[] {
        return motto.map(( v: string, i: number ) => {
            let tc: TypewriterContent = new TypewriterContent(v);
            if ( i == 1 ) {
                tc.setSpecialWord('10').setIterable(true);
            }
            return tc;
        });
    }
}
