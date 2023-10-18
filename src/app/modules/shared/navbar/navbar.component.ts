import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { MovieDetails } from 'src/app/interfaces/movie';
import { GetMoviesService } from 'src/app/services/get-movies.service';
import { WatchListService } from 'src/app/services/watch-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  // Fontawesome Icons
  faHeart = faHeart;
  moviesSet!: Map<number, MovieDetails>;
  pageNumber: any
  constructor(private watchListService: WatchListService, private movieService: GetMoviesService) { }
  ngOnInit() {
    this.watchListService
      .getMoviesArray()
      .subscribe((moviesSet) => (this.moviesSet = moviesSet));

    this.movieService.getMoviesList().subscribe((data) => {
      // console.log(data.page);
      this.pageNumber
    })
  }
}
