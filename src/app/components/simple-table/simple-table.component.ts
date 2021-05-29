import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  tableData = [
    {
      first: 'Atilla 1',
      last: 'Altun',
      dob: '01.12.1084',
    },
    {
      first: 'Atilla 2',
      last: 'Altun',
      dob: '01.12.1084',
    },
    {
      first: 'Atilla 3',
      last: 'Altun',
      dob: '01.12.1084',
    },
    {
      first: 'Atilla 4',
      last: 'Altun',
      dob: '01.12.1084',
    },
    {
      first: 'Atilla 5',
      last: 'Altun',
      dob: '01.12.1084',
    },
  ];
}
