import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MovieDetails } from '../interfaces/movie-details';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
  private moviesArray = new BehaviorSubject<Map<number,MovieDetails>>(new Map());

  getMoviesArray(){
    return this.moviesArray.asObservable();
  }

  setMoviesArray(moviesArray:Map<number,MovieDetails>){
    this.moviesArray.next(moviesArray);
  }
}
