import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IntroductionModule } from "./feature/introduction/introduction.module";
import { MottoModule } from "./feature/motto/motto.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    IntroductionModule,
      MottoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
