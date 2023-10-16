import { Component, Input } from '@angular/core';
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-wish-list-card',
  templateUrl: './wish-list-card.component.html',
  styleUrls: ['./wish-list-card.component.css']
})
export class WishListCardComponent {
  // Fontawesome
  faHeart = faHeart;
  faStar = faStar;
  @Input() movie !: Movie;
  imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  ngOnInit(){
    console.log(this.movie);
  }
}
