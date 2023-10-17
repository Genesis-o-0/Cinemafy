import { WatchListService } from './../../services/watch-list.service';
import { Component, Input } from '@angular/core';
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { MovieDetails } from 'src/app/interfaces/movie-details';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  // Fontawesome
  faHeart = faHeart;
  faStar = faStar;
  // Properties
  @Input() movieData !: MovieDetails
  moviesSet!: Map<number,MovieDetails>;
  favorite!: boolean;
  constructor(private watchListService: WatchListService) {}

  ngOnInit(): void {
    // console.log(this.movieData);
    this.watchListService
      .getMoviesArray()
      .subscribe((moviesSet) => (this.moviesSet = moviesSet));
    this.favorite = this.moviesSet.has(this.movieData.id);
  }

  addToWatchList() {
    if (this.moviesSet.has(this.movieData.id)) {
      this.moviesSet.delete(this.movieData.id);
      this.favorite = false;
    } else {
      this.moviesSet.set(this.movieData.id, this.movieData);
      this.favorite = true;
    }
  }
}
