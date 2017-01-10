import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {IntroductionModule} from "./feature/introduction/introduction.module";
import {MottoModule} from "./feature/motto/motto.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "@angular/material";

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    IntroductionModule,
      MottoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
