import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { CardDetailsComponent } from './card-details/card-details.component';



@NgModule({
  declarations: [
    AppComponent,
    CardDetailsComponent,
    HomeComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule // Ajoutez HttpClientModule à la liste des imports
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
