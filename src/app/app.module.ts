import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { YGOPRODECKService } from './ygoprodeck.service'; // Importez votre service YGOPRODeckService

@NgModule({
  declarations: [
    AppComponent,
    // CardComponent,
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
    YGOPRODECKService // Ajoutez votre service à la liste des providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
