import { WatchListService } from './../../services/watch-list.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { MovieDetails } from 'src/app/interfaces/movie-details';
import { GetMoviesService } from 'src/app/services/get-movies.service';
import { faHeart } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  background: string = 'test';
  faStar = faStar;
  faUser = faUser;
  actualRate!: number;
  totalRate!: string;
  movieId!: string;
  movie!: MovieDetails;
  recommendations!: MovieDetails[];
  sharedURL: string = 'https://image.tmdb.org/t/p/w500';
  moviesSet!: Map<number, MovieDetails>;
  favorite!: boolean;
  faHeart = faHeart;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesListService: GetMoviesService,
    private watchListService: WatchListService
  ) {
    this.movieId = this.activatedRoute.snapshot.params?.['id'];
    console.log(this.movieId);
  }
  ngOnInit() {
    this.moviesListService.getMovieById(this.movieId).subscribe((data) => {
      this.movie = data;
      console.log(this.movie);

      this.totalRate = `${Math.floor(this.movie.vote_average * 10)}, 100`;
      this.actualRate = Math.floor(this.movie.vote_average * 10);
      console.log(this.totalRate);
      this.watchListService.getMoviesArray().subscribe((moviesSet) => this.moviesSet = moviesSet);
      this.favorite = this.moviesSet.has(this.movie.id);
    });

    this.moviesListService
    .getRecommendations(this.movieId)
    .subscribe((rec) => {
      this.recommendations = rec.results;
      console.log(this.recommendations);
    });
  }

  addToWatchList() {
    if (this.moviesSet.has(this.movie.id)) {
      this.moviesSet.delete(this.movie.id);
      this.favorite = false;
    } else {
      this.moviesSet.set(this.movie.id, this.movie);
      this.favorite = true;
    }

  }
  get dashArrayValue(): string {
    return `${this.movie.vote_average * 10}, 100`;
  }
}
