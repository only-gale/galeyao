import { NgModule } from '@angular/core';
import { IntroductionComponent } from './introduction.component';
import {SharedModule} from "../../shared/shared.module";
import {IntroductionService} from "./introduction.service";
import { TypewriterService, TypewriterModule } from "ng2-typewriter";

@NgModule({
  imports: [
    SharedModule,
    TypewriterModule,
  ],
  declarations: [
    IntroductionComponent
  ],
  providers: [
    TypewriterService,
    IntroductionService
  ],
  exports: [
    IntroductionComponent
  ]
})
export class IntroductionModule { }
