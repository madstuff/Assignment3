import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BasicValidationDirective} from './basic-validation/basic-validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicValidationDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
