import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JokeEditorComponent } from './joke-editor/joke-editor.component';
import { JokeCardComponent } from './joke-card/joke-card.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeEditorComponent,
    JokeCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
