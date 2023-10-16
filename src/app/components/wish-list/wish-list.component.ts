import { Component } from '@angular/core';
import { MovieDetails } from 'src/app/interfaces/movie';
import { WatchListService } from 'src/app/services/watch-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  moviesSet!: Map<number, MovieDetails>;
  constructor(private watchListService: WatchListService) { }
  ngOnInit(): void {
    // console.log(this.movieData);
    this.watchListService.getMoviesArray().subscribe((moviesSet) => this.moviesSet = moviesSet);
  }
}
