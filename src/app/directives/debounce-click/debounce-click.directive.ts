import {
  Directive,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  constructor() {}

  @Output()
  debounceClick = new EventEmitter();

  clicks = new Subject();
  subscription: Subscription;

  ngOnInit() {
    const debounTimeMs = 500;
    this.subscription = this.clicks
      .pipe(debounceTime(debounTimeMs))
      .subscribe((data) => this.debounceClick.emit(data));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent() {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next();
  }
}
