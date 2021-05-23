import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  isOn = false;

  toggle() {
    this.isOn = !this.isOn;
  }
}
