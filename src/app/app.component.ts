import {Component, trigger, transition, animate, keyframes, style, state} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      trigger(
          'slideInDown', [
              state( 'in', style({
                transform: 'translateY(0)',
                visibility: 'visible'
              })),
              state( 'out', style({
                transform: 'translateY(-100%)',
                visibility: 'hidden'
              })),
              transition( 'out => in', animate( 1000, keyframes( [
                  style( {
                    transform: 'translate3d(0, -100%, 0)',
                    visibility: 'visible'
                  }),
                  style( {
                    transform: 'translate3d(0, 0, 0)'
                  })
              ]))),
              transition( 'void => out', animate( 1000, keyframes( [
                  style( {
                    transform: 'translate3d(0, 0, 0)',
                    visibility: 'visible'
                  }),
                  style( {
                    transform: 'translate3d(0, -100%, 0)',
                    visibility: 'hidden'
                  })
            ]))),
          ]
      ),
      trigger(
          'fadeOut', [
              state( 'in', style({
                  opacity: 1
              })),
              state( 'out', style({
                  opacity: 0
              })),
              transition( 'out => in', animate( 1000, keyframes( [
                  style( {
                      opacity: 0
                  }),
                  style( {
                      opacity: 1
                  })
              ]))),
              transition( 'void => out', animate( 1000, keyframes( [
                  style( {
                      opacity: 1
                  }),
                  style( {
                      opacity: 0
                  })
              ]))),
          ]
      )
  ]
})
export class AppComponent {
  constructor() {}
  isDone: boolean = false;

  onMottoDone( isDone: boolean ): void {
    this.isDone = !isDone;
  }
}