import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  quote = '';

  @Input()
  author = '';

  @Input()
  occupation = '';
}
