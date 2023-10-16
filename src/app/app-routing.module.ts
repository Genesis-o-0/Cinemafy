import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  { path: 'wishlist', component: WishListComponent},
  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
