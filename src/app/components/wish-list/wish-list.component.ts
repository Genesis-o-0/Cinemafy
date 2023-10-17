import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { WatchListService } from 'src/app/services/watch-list.service';
import { MovieDetails } from 'src/app/interfaces/movie-details';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  moviesSet!: Map<number, MovieDetails>;
  constructor(private watchListService: WatchListService, private router: Router) { }
  ngOnInit(): void {
    // console.log(this.movieData);
    this.watchListService.getMoviesArray().subscribe((moviesSet) => this.moviesSet = moviesSet);
  }

  navigateToHome(){
    this.router.navigate(['/']);
  }
}
