import {Injectable} from '@angular/core';

@Injectable()
export class MottoService {

    constructor() {
    }

    getMotto() {
        return [
            "They say,",
            "There are only 10 types of people in the world:",
            "Those who understand binary, and those who don't.",
            "I'm proud of being one of the former.",
            "What about you?"
        ];
    }
}
