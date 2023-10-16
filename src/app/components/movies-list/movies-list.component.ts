import { Component } from '@angular/core';
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Movie } from 'src/app/interfaces/movie';
import { GetMoviesService } from 'src/app/services/get-movies.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  // Fontawesome Icons
  faHeart = faHeart
  faStar = faStar
  // Properties
  arrOfMoviesList: Movie[]
  constructor(private movieList: GetMoviesService) {
    this.arrOfMoviesList = []
  }
  ngOnInit(): void {
    this.movieList.getMoviesList().subscribe((data) => this.arrOfMoviesList = data.results
    )
  }
}
