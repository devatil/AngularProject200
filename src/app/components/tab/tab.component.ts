import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  tabs: { title: string; active: boolean }[] = [];

  @Output()
  selectedTabIndex = new EventEmitter<number>();

  selectedTab(selected: { title: string; active: boolean }, index: number) {
    this.tabs.forEach((tab) => {
      tab.active = selected === tab;
    });
    this.selectedTabIndex.emit(index);
  }
}
