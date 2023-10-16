import { Component, Input } from '@angular/core';
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { MovieDetails } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  // Fontawesome
  faHeart = faHeart
  faStar = faStar
  // Properties
  @Input() movieData !: MovieDetails
  ngOnInit(): void {
    // console.log(this.movieData);
  }
}
