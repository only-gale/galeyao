import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { MottoComponent } from "./motto.component";
import { MottoService } from "./motto.service";
import { TypewriterModule, TypewriterService } from "ng2-typewriter";

@NgModule({
    imports: [ SharedModule, TypewriterModule ],
    declarations: [
        MottoComponent,
    ],
    providers: [
        TypewriterService,
        MottoService
    ],
    exports: [
        MottoComponent
    ]
})
export class MottoModule {
}
