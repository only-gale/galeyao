/**
 * Created by gale on 17-1-6.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HighlightDirective } from "./directives/highlight.directive";
import { TypewriterDirective } from "./directives/typewriter.directive";
import { CursorComponent } from "./components/cursor/cursor.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        HighlightDirective,
        TypewriterDirective,
        CursorComponent,
    ],
    exports: [
        CommonModule,
        HighlightDirective,
        TypewriterDirective,
        CursorComponent,
    ]
})

export class SharedModule {
}
