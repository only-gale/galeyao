import { Component, OnInit, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MottoService } from "./motto.service";
import { TypewriterService, TypewriterContent } from "ng2-typewriter";

@Component({
    selector: 'g-motto',
    templateUrl: './motto.component.html',
    styleUrls: [ './motto.component.css' ],
    outputs: [
        'afterDone'
    ]
})
export class MottoComponent implements OnInit {

    constructor( private mottoService: MottoService, private typewriterService: TypewriterService ) { }

    ngOnInit() {
        this.formatMotto();
    }

    isDone: boolean = false;
    motto: TypewriterContent[] = [];
    afterDone: EventEmitter<boolean> = new EventEmitter();

    onDone( isDone: boolean ): void {
        this.isDone = isDone;
        if ( this.isDone ) {
            this.afterDone.emit(this.isDone)
        }
    }

    private formatMotto(): void {
        this.motto = this.typewriterService.format(this.mottoService.getMotto());
        this.motto.map(( v: TypewriterContent, i: number ) => {
            if ( i == 1 ) {
                v.iterable = true;
                v.setSpecialWord('10');
            }
        });
    }
}
