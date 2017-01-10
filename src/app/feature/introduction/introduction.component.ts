import {Component, OnInit, ElementRef, ViewEncapsulation} from '@angular/core';
import {IntroductionService} from "./introduction.service";

@Component({
  selector: 'g-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class IntroductionComponent implements OnInit {

  constructor( private el: ElementRef, private introductionService: IntroductionService ) { }

  ngOnInit() {
    const hostElem = this.el.nativeElement;
    this._target = hostElem.querySelector('span.wrap');
    this.hobbies = this.introductionService.getHobbies() || this.hobbies;
  }

  private hobbies: Array<string> = [];

  private _target: Element;
}
