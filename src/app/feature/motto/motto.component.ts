import { Component, OnInit, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MottoService } from "./motto.service";
import { TypewriterContent } from "../../shared/po/typewriter.content";

@Component({
    selector: 'g-motto',
    templateUrl: './motto.component.html',
    styleUrls: [ './motto.component.css' ],
    encapsulation: ViewEncapsulation.None,
    outputs: [
        'afterDone'
    ]
})
export class MottoComponent implements OnInit {

    constructor( private mottoService: MottoService ) { }

    ngOnInit() {
    }

    private _delay: number = 1500;

    isDone: boolean = false;
    motto: TypewriterContent[] = this.mottoService.getMotto();
    afterDone: EventEmitter<boolean> = new EventEmitter();

    onDone( isDone: boolean ): void {

        setTimeout(
            () => {
                this.isDone = isDone;
                if ( this.isDone ) {
                    this.startLeaving();
                }
            },
            this._delay
        );
    }

    startLeaving() {
        setTimeout(
            () => this.afterDone.emit(this.isDone),
            this._delay
        )
    }
}
