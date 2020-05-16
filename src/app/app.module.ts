import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, InputButtonUnitComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
