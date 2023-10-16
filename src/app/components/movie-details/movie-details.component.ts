import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { MovieDetails } from 'src/app/interfaces/movie-details';
import { GetMoviesService } from 'src/app/services/get-movies.service';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesListService: GetMoviesService
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

      this.moviesListService
        .getRecommendations(this.movieId)
        .subscribe((rec) => {
          this.recommendations = rec.results;
          console.log(this.recommendations);
        });
    });
  }
  get dashArrayValue(): string {
    return `${this.movie.vote_average * 10}, 100`;
  }
}
