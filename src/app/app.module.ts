import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './form/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ReactiveFormComponent]
})
export class AppModule { }
