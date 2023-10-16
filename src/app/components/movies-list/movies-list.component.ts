import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  pageNumber !: number
  arrOfMoviesList: Movie[]
  searchInputValue: string = ""
  constructor(private movieList: GetMoviesService, private router: Router) {
    this.arrOfMoviesList = []
  }
  ngOnInit(): void {
    this.movieList.getMoviesList().subscribe((data) => this.arrOfMoviesList = data.results
    )
  }

  searchFunc() {
    if (this.searchInputValue.length != 0 && this.searchInputValue.trim()) {
      this.movieList.getMovieFromSearch(this.searchInputValue).subscribe((data) => {
        this.movieList.setArrOfSearchedMovies(data.results)
      })
      this.router.navigate(['/movies-search'])
    }
  }

  paginationFunc(event: any) {
    this.movieList.setPaginationNumber(event.target.value)
    this.movieList.getMoviesPagination(event.target.value).subscribe((data) => {
      this.arrOfMoviesList = data.results
      console.log(data.results);
    })
  }
  nextPaginate() {
    this.movieList.getPaginationNumber().subscribe((pageNumberFromService) => {
      this.pageNumber = pageNumberFromService
    })
    this.movieList.getMoviesPagination(this.pageNumber + 1).subscribe((data) => {
      this.arrOfMoviesList = data.results
      console.log(data);
    })
    this.movieList.setPaginationNumber(this.pageNumber + 1)
  }
  previousPaginate() {
    this.movieList.getPaginationNumber().subscribe((data) => {
      console.log(data);
      this.pageNumber = data
    })
    this.movieList.getMoviesPagination(this.pageNumber - 1).subscribe((data) => {
      this.arrOfMoviesList = data.results
      console.log(data);
    })
    this.movieList.setPaginationNumber(this.pageNumber - 1)
  }
}
