import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarkdownInputComponent } from './markdown-input/markdown-input.component';
import { MarkdownOutputComponent } from './markdown-output/markdown-output.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownInputComponent,
    MarkdownOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
