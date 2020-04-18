import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { firstComponent } from './first/first.component' ;
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    firstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
