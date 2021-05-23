import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-deboucesearch',
  templateUrl: './deboucesearch.component.html',
  styleUrls: ['./deboucesearch.component.scss'],
})
export class DeboucesearchComponent implements OnInit {
  constructor() {
    this.searchUpdate$
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => this.searchUpdate.emit(value));
  }

  ngOnInit(): void {}

  @Input()
  searchTerm = '';

  @Input()
  placeholderSearch = 'Search';

  @Output()
  searchUpdate = new EventEmitter<string>();

  searchUpdate$ = new Subject<string>();

  updateSearcTerm(term: string) {
    this.searchUpdate$.next(term);
  }
}
