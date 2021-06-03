// New component must be registered here!! Angular won't search in all files
// for a new component...
// to register import and then write it on the declarations

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
   MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
   } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BaseTemplateModule} from './core/base-template/base-template.module';
import {CoreModule} from './core/core.module';
import {HomeModule} from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
      CoreModule,
      HomeModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
      BaseTemplateModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

