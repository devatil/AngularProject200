import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  counter = 0;

  @Input()
  min = 0;

  @Input()
  max = Number.MAX_SAFE_INTEGER;

  minusOne() {
    if (this.min < this.counter) {
      this.counter--;
    }
  }

  addOne() {
    if (this.max > this.counter) {
      this.counter++;
    }
  }
}
