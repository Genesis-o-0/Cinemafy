import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './modules/movie-related/movies-list/movies-list.component';
import { MovieDetailsComponent } from './modules/movie-related/movie-details/movie-details.component';
import { NotFoundComponent } from './modules/shared/not-found/not-found.component';
import { WishListComponent } from './modules/movie-related/wish-list/wish-list.component';
import { MoviesSearchComponent } from './modules/movie-related/movies-search/movies-search.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  { path: 'movies-search', component: MoviesSearchComponent },
  { path: 'wishlist', component: WishListComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
