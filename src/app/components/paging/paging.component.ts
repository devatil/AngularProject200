import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
})
export class PagingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  totalItems = 100;

  @Input()
  pageSize = 25;

  @Input()
  currentPage = 1;

  @Input()
  step = 1;

  @Output()
  pageChange: EventEmitter<number> = new EventEmitter();

  get totalPages() {
    return Math.ceil(this.totalItems || 1) / (this.pageSize || 1);
  }

  get isFirstPage() {
    return this.currentPage === 1;
  }

  get isLastPage() {
    return this.currentPage === this.totalPages;
  }

  get isNextDisabled() {
    return this.currentPage + this.step > this.totalPages;
  }

  get previusDisabled() {
    return this.currentPage === 1;
  }

  get pages(): number[] {
    const pages = [];

    if (this.currentPage > 1) {
      pages.push(this.currentPage - 1);
    }

    pages.push(this.currentPage);

    if (this.currentPage < this.totalPages) {
      pages.push(this.currentPage + 1);
    }
    if (this.currentPage + 1 < this.totalPages) {
      pages.push(this.currentPage + 2);
    }
    if (this.currentPage + 1 < this.totalPages && this.currentPage === 1) {
      pages.push(this.currentPage + 3);
    }

    return pages;
  }

  setPage(page) {
    this.currentPage = page;
    this.pageChange.emit(page);
  }
}
