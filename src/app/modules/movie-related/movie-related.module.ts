import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { WishListCardComponent } from './wish-list-card/wish-list-card.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CarouselComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    MoviesSearchComponent,
    MoviesListComponent,
    WishListCardComponent,
    WishListComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    CarouselComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    MoviesSearchComponent,
    MoviesListComponent,
    WishListCardComponent,
    WishListComponent,
  ],
})
export class MovieRelatedModule {}
