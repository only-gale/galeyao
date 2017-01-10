import { NgModule } from '@angular/core';
import { IntroductionComponent } from './introduction.component';
import {SharedModule} from "../../shared/shared.module";
import {IntroductionService} from "./introduction.service";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    IntroductionComponent
  ],
  providers: [
    IntroductionService
  ],
  exports: [
    IntroductionComponent
  ]
})
export class IntroductionModule { }
