/**
 * Created by gale on 16-12-27.
 */
import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core'

@Directive({
    selector: '[myHighlight]'
})

export class HighlightDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {

    }

    private _defaultColor = 'red';

    @Input() set highlightColor(colorName: string) {
        this._defaultColor = colorName || this._defaultColor;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this._defaultColor);
    }

    @HostListener('mouseleave') onLouseLeave() {
        this.highlight(null)
    }

    private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}