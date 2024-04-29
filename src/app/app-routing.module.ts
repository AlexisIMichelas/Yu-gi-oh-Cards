import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { CardDetailsComponent } from './card-details/card-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'card', component: CardDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
