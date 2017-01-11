import { Component, trigger, transition, animate, keyframes, style, state } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ],
    animations: [
        trigger(
            'fadeIn', [
                state('in', style({
                    height: '*',
                    opacity: 1,
                })),
                transition('* => in', animate(1500, keyframes([
                    style({
                        height: '0',
                        opacity: 0,
                    }),
                    style({
                        height: '*',
                        opacity: 1,
                    })
                ]))),
            ]
        ),
        trigger(
            'fadeOut', [
                state('out', style({
                    flex: '0 0 0',
                    height: '0',
                    opacity: 0,
                })),
                transition('* => out', animate(1000, keyframes([
                    style({
                        flex: '1 1 100%',
                        height: '*',
                        opacity: 1,
                        offset: 0
                    }),
                    style({
                        flex: '1 1 100%',
                        height: '*',
                        opacity: 0.3,
                        offset: 0.3
                    }),
                    style({
                        flex: '0 0 0',
                        height: '0',
                        opacity: 0,
                        offset: 1
                    })
                ]))),
            ]
        )
    ]
})
export class AppComponent {
    constructor() {
    }

    isMottoDone: boolean = false;
    isMottoLeft: boolean = false;

    onMottoDone( isDone: boolean ): void {
        this.isMottoDone = isDone;
    }

    onMottoLeft( e ): void {
        let toState = e.toState;
        if ( 'out' === toState ) {
            this.isMottoLeft = true;
        }
    }
}
