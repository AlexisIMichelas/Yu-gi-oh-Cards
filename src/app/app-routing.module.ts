import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'card', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
