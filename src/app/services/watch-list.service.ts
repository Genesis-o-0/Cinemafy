import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
  private moviesArray = new BehaviorSubject<Map<number,Movie>>(new Map());

  getMoviesArray(){
    return this.moviesArray.asObservable();
  }

  setMoviesArray(moviesArray:Map<number,Movie>){
    this.moviesArray.next(moviesArray);
  }
}
