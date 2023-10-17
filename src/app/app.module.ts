// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { WishListComponent } from './components/wish-list/wish-list.component'
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WishListCardComponent } from './components/wish-list-card/wish-list-card.component';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component'
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieCardComponent,
    NavbarComponent,
    FooterComponent,
    MovieDetailsComponent,
    WishListComponent,
    NotFoundComponent,
    WishListCardComponent,
    MoviesSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
