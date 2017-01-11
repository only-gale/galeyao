/**
 * Created by gale on 17-1-11.
 */
export class TypewriterContent {
    constructor( private content: string, private specialWords?: string[], private specialClasses?: string[] ) {
        this._content = content;
        this._specialWords = specialWords;
        this._specialClasses = specialClasses;
    }

    private _content: string = '';
    private _specialWords: string[] = [];
    private _specialClasses: string[] = [];

    public setSpecialWord(specialWord: string): void {
        this._specialWords = [ specialWord ];
    }
    public setSpecialWords(specialWords: string[]): void {
        this._specialWords = specialWords;
    }

    public setSpecialClass(specialClass: string): void {
        this._specialClasses = [ specialClass ];
    }
    public setSpecialClasses(specialClasses: string[]): void {
        this._specialClasses = specialClasses;
    }
}