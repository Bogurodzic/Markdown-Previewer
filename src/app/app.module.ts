import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
