import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.scss'],
})
export class SearchlistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  searchTerm = '';

  hasBeenSelected = true;

  @Input()
  items: string[] = [];

  searchUpdateTerm(value) {
    this.searchTerm = value;
    this.hasBeenSelected = false;
  }

  selectSearchTerm(value: string) {
    this.searchTerm = value;
    this.hasBeenSelected = true;
  }
}
