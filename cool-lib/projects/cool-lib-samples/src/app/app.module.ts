import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoolLibModule } from './../../../cool-lib/src/lib/cool-lib.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoolLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
