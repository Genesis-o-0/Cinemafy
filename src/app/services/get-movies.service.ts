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
  // arrOfSearchedMovies: Movie[] = []
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/movie/popular';
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
}
