import {Component, OnInit, EventEmitter, ViewEncapsulation} from '@angular/core';
import {MottoService} from "./motto.service";

@Component({
  selector: 'g-motto',
  templateUrl: './motto.component.html',
  styleUrls: ['./motto.component.css'],
  encapsulation: ViewEncapsulation.None,
  outputs: [
    'afterDone'
  ]
})
export class MottoComponent implements OnInit {

  constructor( private mottoService: MottoService ) { }

  ngOnInit() {
  }

  isDone: boolean = false;
  private motto: Array<string> = this.mottoService.getMotto();
  afterDone: EventEmitter<boolean> = new EventEmitter();

  onDone( isDone: boolean ): void {

    setTimeout(
        () => {
          this.isDone = isDone;
          this.afterDone.emit( this.isDone );
        },
        1500
    );
  }
}
