import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-of-page',
  templateUrl: './tip-of-page.component.html',
  styleUrls: ['./tip-of-page.component.scss'],
})
export class TipOfPageComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  isShown = false;

  @HostListener('window:scroll') onWindowScroll() {
    const yCoord = this.viewportScroller.getScrollPosition()[1];
    this.isShown = yCoord > 200;
  }

  goToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
