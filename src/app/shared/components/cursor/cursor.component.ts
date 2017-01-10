import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'g-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CursorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() activated: boolean = true;
}
