import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ToasterModule.forRoot(),],
  declarations: [AppComponent, HelloComponent, CounterComponent],
  bootstrap: [AppComponent],
  entryComponents: [CounterComponent]
})
export class AppModule { }
