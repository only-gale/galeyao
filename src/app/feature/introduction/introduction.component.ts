import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { IntroductionService } from "./introduction.service";
import { TypewriterContent } from "../../shared/po/typewriter.content";

@Component({
    selector: 'g-introduction',
    templateUrl: './introduction.component.html',
    styleUrls: [ './introduction.component.css' ],
    encapsulation: ViewEncapsulation.None,
})
export class IntroductionComponent implements OnInit {

    constructor( private el: ElementRef, private introductionService: IntroductionService ) { }

    ngOnInit() {
        const hostElem = this.el.nativeElement;
        this._target = hostElem.querySelector('span.wrap');
        this.hobbies = this.introductionService.getHobbies() || this.hobbies;
    }

    public hobbies: TypewriterContent[] = [];

    private _target: Element;
}
