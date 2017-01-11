/**
 * Created by gale on 17-1-7.
 */
import { Directive, ElementRef, Input, AfterViewInit, Output, EventEmitter } from "@angular/core";
import { TypewriterContent } from "../po/typewriter.content";
@Directive({
    selector: '[g-typewriter]'
})

export class TypewriterDirective implements AfterViewInit {
    ngAfterViewInit(): void {
        this._target = this.el.nativeElement.querySelector('span.wrap');
        setTimeout(() => this.tick(), this._delay);
    }

    constructor( private el: ElementRef ) {
    }

    private _target: Element;
    private _loopNum: number = 0;
    private _index: number = 0;
    private _duration: number = 1500;       // Default duration.
    private _delay_ratio: number = ( Math.sqrt(5) - 1 ) / 2;
    private _delay = this._duration * this._delay_ratio;           // Delay before type next sentence out.

    private _erasable: boolean = true;
    private _inline: boolean = true;
    private _decorable: boolean = false;
    private _isDeleting: boolean = false;

    private _text_decorated: string = '';
    private _isDone = false;
    private _regex = /[,;]$/;       // Delay if the text match this rule. In order to setting delay within a sentence.

    private _cur = -1;
    private _decorate_templates: string[] = [];
    private _default_special_class_name = 'special-typewriter';

    private _contents: TypewriterContent[] = [];

    @Output() isDone = new EventEmitter<boolean>();

    @Input() set contents( contentsArray: TypewriterContent[] ) {
        this._contents = contentsArray || this._contents;
    }

    @Input() set duration( duration: number ) {
        this._duration = duration || this._duration;
    }

    @Input() set erasable( erasable: boolean ) {
        this._erasable = erasable;
    }

    @Input() set inline( inline: boolean ) {
        this._inline = inline;
    }

    @Input() set decorable( decorable: boolean ) {
        this._decorable = decorable;
    }

    private tick(): void {
        let i = this._loopNum % this._contents.length;
        let tc = this._contents[ i ];
        let fullText = tc.getContent();

        if ( i !== this._cur ) {
            this._cur = i;
            this._set_decorate_templates(tc);
        }

        if ( this._erasable ) {
            this._deal_with_erasable(fullText);
        } else {
            this._deal_with_unerasable(fullText);
        }
    }

    private _deal_with_erasable( fullText: string ): void {
        let delta = 100 - Math.random() * 50;

        if ( this._isDeleting ) {
            this._text_decorated = fullText.substring(0, this._text_decorated.length - 1);
            delta /= 2;     // Speed up.
            if ( this._text_decorated === '' ) {
                this._isDeleting = false;
                this._loopNum++;
                delta = 0;      // Type next out immediately.
            }
        } else {
            this._text_decorated = fullText.substring(0, this._text_decorated.length + 1);
            if ( this._text_decorated === fullText ) {
                delta = this._duration;
                this._isDeleting = true;
            }
        }

        this._show(delta);
    }

    private _deal_with_unerasable( fullText: string ): void {
        let delta = 100 - Math.random() * 80;

        let tick_char: string;
        let origin_text: string;
        let className: string;

        origin_text = fullText.substring(0, this._index++);

        // Decoration begin
        tick_char = origin_text.substr(-1);
        if ( this._decorable ) {
            className = this._decorate_templates[ Math.max(0, origin_text.length - 1) ];
            this._text_decorated += (className ? this._render(tick_char, className) : tick_char);
        } else {
            this._text_decorated += tick_char;
        }

        if ( origin_text.match(this._regex) ) {
            delta = this._delay / 2;
        }

        // Condition check.
        if ( !this._inline && origin_text === fullText ) {
            this._loopNum++;
            this._index = 0;
            delta = this._duration;
            if ( this._loopNum < this._contents.length ) {      // Breaking line.
                this._text_decorated += '<br />';
            } else {
                this._isDone = true;
                this.isDone.emit(this._isDone);
            }
        }

        this._show(delta);
    }

    private _show( delta: number ): void {
        this._target.innerHTML = this._text_decorated;

        if ( !this._isDone ) {
            setTimeout(() => this.tick(), delta);
        }
    }

    private _render( text: string, className: string ): string {
        return '<span class="' + className + '">' + text + '</span>';
    }

    private _set_decorate_templates( content: TypewriterContent ): void {
        let fullText = content.getContent();
        let specialWords = content.getSpecialWords();
        let specialClasses = content.getSpecialClasses();
        let iterable = content.getIterable();

        // Init it.
        this._decorate_templates = [];
        this._decorate_templates.length = fullText.length;

        specialWords.forEach(( v, i ) => {
            let regex: RegExp = this._get_word_regex(v, 'g');
            if ( iterable ) {
                while ( regex.exec(fullText) ) {
                    this._get_it_filled(specialClasses, i, regex.lastIndex, v.length);
                }
            } else {
                regex.exec(fullText);
                this._get_it_filled(specialClasses, i, regex.lastIndex, v.length);
            }
        });
    }

    private _get_word_regex( v: string, flag?: string ): RegExp {
        return flag && flag.length > 0 ? new RegExp('\\b' + v + '\\b', flag) : new RegExp('\\b' + v + '\\b');
    }

    private _get_it_filled( classes: string[], index: number, lastIndex: number, length: number ): void {
        for ( let x = 1; x <= length; x++ ) {
            this._decorate_templates[ lastIndex - x ] = this._get_special_class_from(classes, index);
        }
    }

    private _get_special_class_from( classes: string[], at: number ): string {
        if ( classes && classes.length ) {
            if ( at > classes.length ) {
                return classes[ 0 ];    // Taking the first one is as default choice.
            } else {
                return classes[ at ];
            }
        } else {
            return this._default_special_class_name;
        }
    }
}
