import { Component } from '@angular/core';
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-wish-list-card',
  templateUrl: './wish-list-card.component.html',
  styleUrls: ['./wish-list-card.component.css']
})
export class WishListCardComponent {
    // Fontawesome
    faHeart = faHeart;
    faStar = faStar;
}
