import { Component } from '@angular/core';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  background: string = 'test';
  faStar = faStar;
  faUser = faUser;
  actualRate: number = 90;
  totalRate: string = `${this.actualRate}, 100`;
}
