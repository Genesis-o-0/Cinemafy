import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../interfaces/api-response';
import { Movie } from '../interfaces/movie';


@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "https://api.themoviedb.org/3/movie/popular"
  getMoviesList() {
    return this.http.get<ApiResponse>(this.baseUrl,
      {
        params: {
          api_key: "0baaacf727870157b7b93c6e641df649"
        }
      })
  }
  getMovieById(movieId: number) {
    return this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: "0baaacf727870157b7b93c6e641df649"
        }
      })
  }
}
