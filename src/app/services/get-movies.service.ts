import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../interfaces/api-response';
import { MovieDetails } from '../interfaces/movie-details';
import { Movie } from '../interfaces/movie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetMoviesService {
  private arrOfSearchedMovies = new BehaviorSubject<Array<Movie>>([]);
  private paginationNumber = new BehaviorSubject<number>(1)
  // arrOfSearchedMovies: Movie[] = []
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/movie/popular';
  }
  // ********************
  getPaginationNumber() {
    // console.log(this.paginationNumber.value);
    this.paginationNumber.next(this.paginationNumber.value)
    return this.paginationNumber.asObservable()
  }
  setPaginationNumber(pagNumber: number) {
    // console.log(pagNumber);

    this.paginationNumber.next(pagNumber)
  }
  // *****************
  getArrOfSearchedMovies() {
    return this.arrOfSearchedMovies.asObservable();
  }
  setArrOfSearchedMovies(newArr: Movie[]) {
    this.arrOfSearchedMovies.next(newArr);
  }

  getMoviesList() {
    return this.http.get<ApiResponse>(this.baseUrl, {
      params: {
        api_key: '0baaacf727870157b7b93c6e641df649',
      },
    });
  }

  getMovieById(movieId: string) {
    return this.http.get<MovieDetails>(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: '0baaacf727870157b7b93c6e641df649',
        },
      }
    );
  }
  //  Search For Movies
  getMovieFromSearch(movieName: string) {
    return this.http.get<ApiResponse>(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          api_key: '0baaacf727870157b7b93c6e641df649',
          query: movieName,
        },
      }
    );
  }
  // get Movies pages for Pagination
  // https://api.themoviedb.org/3/movie/popular?api_key={api_key}&page=4
  getMoviesPagination(pageNumber: any) {
    return this.http.get<ApiResponse>(`https://api.themoviedb.org/3/movie/popular`,
      {
        params: {
          api_key: '0baaacf727870157b7b93c6e641df649',
          page: pageNumber
        }
      })
  }
}
