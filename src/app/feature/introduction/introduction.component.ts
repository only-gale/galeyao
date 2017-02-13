import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { IntroductionService } from "./introduction.service";
import { TypewriterService, TypewriterContent } from "ng2-typewriter";

@Component({
    selector: 'g-introduction',
    templateUrl: './introduction.component.html',
    styleUrls: [ './introduction.component.css' ],
})
export class IntroductionComponent implements OnInit {

    constructor( private el: ElementRef, private introductionService: IntroductionService, private typewriterService: TypewriterService) { }

    ngOnInit() {
        const hostElem = this.el.nativeElement;
        this._target = hostElem.querySelector('span.wrap');
        this.hobbies = this._formatHobbies(this.introductionService.getHobbies()) || this.hobbies;
    }

    public hobbies: TypewriterContent[] = [];

    private _target: Element;

    private _formatHobbies(hobbies: string[]): TypewriterContent[] {
        return this.typewriterService.format(hobbies);
    }
}
