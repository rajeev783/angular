import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { firstComponent } from './first/first.component' ;
import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { GOTCharacterComponent } from './gotcharacter/gotcharacter.component';

@NgModule({
  declarations: [
    AppComponent,
    firstComponent,
    SecondComponentComponent,
    GOTCharacterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
