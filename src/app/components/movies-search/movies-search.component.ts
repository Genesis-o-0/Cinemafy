import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { GetMoviesService } from 'src/app/services/get-movies.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent {
  arrOfSearchedMoviesFromService!: Movie[]
  searchInputVal: string = ""
  constructor(private movieList: GetMoviesService) { }
  ngOnInit(): void {
    this.movieList.getArrOfSearchedMovies().subscribe((data) => {
      this.arrOfSearchedMoviesFromService = data
    })
  }
  searchMovie() {
    if (this.searchInputVal.length != 0 && this.searchInputVal.trim()) {
      this.movieList.getMovieFromSearch(this.searchInputVal).subscribe((data) => {
        // console.log(data);
        this.movieList.setArrOfSearchedMovies(data.results)
      })
    }
  }
}
