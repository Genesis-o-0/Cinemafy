import { Component } from '@angular/core';
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { Movie } from 'src/app/interfaces/movie';
import { WatchListService } from 'src/app/services/watch-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Fontawesome Icons
  faHeart = faHeart
  moviesSet!: Map<number,Movie>;
  constructor(private watchListService: WatchListService){}
  ngOnInit(){
    this.watchListService.getMoviesArray().subscribe((moviesSet) => this.moviesSet = moviesSet);
  }
}
