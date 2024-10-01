import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    // Add other components here if necessary
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Imported HttpClientModule for making API calls
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
