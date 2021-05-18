import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.scss'],
})
export class StarratingComponent {
  @Input()
  rating = 5;
  highestRating = 5;

  get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);
    return Array(totalFullStars).fill(0);
  }

  get halfStars(): boolean {
    const halfStar =
      this.rating - Math.floor(this.rating) >= 0.5 &&
      this.rating !== this.highestRating;
    return halfStar;
  }

  get emptyStars(): number[] {
    const totalEmptyStars = Math.floor(this.highestRating - this.rating);
    return Array(totalEmptyStars).fill(0);
  }
}
