import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {MottoComponent} from "./motto.component";
import {MottoService} from "./motto.service";

@NgModule({
  imports: [ SharedModule ],
  declarations: [
    MottoComponent,
  ],
  providers: [
    MottoService
  ],
  exports: [
    MottoComponent
  ]
})
export class MottoModule { }
