/**
 * Created by gale on 17-1-7.
 */
import {Directive, ElementRef, Input, AfterViewInit, Output, EventEmitter} from "@angular/core";
@Directive({
    selector: '[g-typewriter]'
})

export class TypewriterDirective implements AfterViewInit {
    ngAfterViewInit(): void {
        const hostElem = this.el.nativeElement;
        this._target = hostElem.querySelector('span.wrap');
        setTimeout(() => this.tick(), this._duration);
    }
    constructor ( private el: ElementRef){}

    private _target: Element;
    private _loopNum: number = 0;
    private _index: number = 0;
    private _duration: number = 1800;
    private _delay_ratio: number = ( Math.sqrt( 5 ) - 1 ) / 2;
    private _erasable: boolean = true;
    private _inline: boolean = true;
    private _isDeleting: boolean = false;
    private _text: string = '';
    private _text_tmp: string = '';
    private _isDone = false;
    private _delay = this._duration * this._delay_ratio;           // Delay after typed out.
    private _regex = /[,;]$/;       // Delay if the text match this rule.
    @Output() isDone = new EventEmitter<boolean>();

    _contents: Array<string> = [];

    @Input() set contents( contentsArray: Array<string> ) {
        this._contents = contentsArray || this._contents;
    }

    @Input() set duration( duration: number) {
        this._duration = duration || this._duration;
    }

    @Input() set erasable( erasable: boolean ) {
        this._erasable = erasable;
    }

    @Input() set inline( inline: boolean ) {
        this._inline = this._erasable || inline;
    }

    private tick() {
        let i = this._loopNum % this._contents.length;
        let fullText = this._contents[ i ];
        let delta = 150 - Math.random() * 100;

        if ( this._erasable ) {
            if ( this._isDeleting ) {
                this._text = fullText.substring( 0, this._text.length - 1 );
                delta /= 2;
                if ( this._text === '' ) {
                    this._isDeleting = false;
                    this._loopNum++;
                    delta = this._delay;
                }
            } else {
                this._text = fullText.substring( 0, this._text.length + 1 );
                if ( this._text === fullText ) {
                    delta = this._duration;
                    this._isDeleting = true;
                }
            }
            this._target.innerHTML = this._text;
        } else {
            this._text = fullText.substring( 0, this._index++ );
            if ( !this._inline && this._text === fullText ) {
                this._loopNum++;
                this._index = 0;
                delta = this._duration;
                if ( this._loopNum < this._contents.length ) {
                    this._text_tmp += ( this._text + '<br />' );
                    this._text = '';
                } else {
                    this._isDone = true;
                    this.isDone.emit( this._isDone );
                }
            }

            if ( this._text.match( this._regex )) {
                delta = this._delay;
            }
            this._target.innerHTML = this._text_tmp + this._text;
        }

        if ( !this._isDone ) {
            setTimeout(() => this.tick(), delta);
        }
    }
}