/**
 * Created by gale on 17-1-11.
 */
export class TypewriterContent {
    constructor( private content: string, private specialWords?: string[], private specialClasses?: string[], private iterable?: boolean ) {
        this._content = content;
        this._specialWords = specialWords || [];
        this._specialClasses = specialClasses || [];
        this._iterable = !!iterable;
    }

    private _content: string;
    private _specialWords: string[];
    private _specialClasses: string[];
    private _iterable: boolean;

    public getContent(): string {
        return this._content;
    }
    public getSpecialWords(): string[] {
        return this._specialWords;
    }
    public getSpecialClasses(): string[] {
        return this._specialClasses;
    }
    public getIterable(): boolean {
        return this._iterable;
    }
    public setSpecialWord(specialWord: string): TypewriterContent {
        this._specialWords = [ specialWord ];
        return this;
    }
    public setSpecialWords(specialWords: string[]): TypewriterContent {
        this._specialWords = specialWords;
        return this;
    }

    public setSpecialClass(specialClass: string): TypewriterContent {
        this._specialClasses = [ specialClass ];
        return this;
    }
    public setSpecialClasses(specialClasses: string[]): TypewriterContent {
        this._specialClasses = specialClasses;
        return this;
    }

    public setIterable(iterable: boolean): TypewriterContent {
        this._iterable = iterable;
        return this;
    }

}