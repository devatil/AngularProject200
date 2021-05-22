import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input()
  title = '';

  isHidden = false;

  close() {
    this.isHidden = true;
  }

  open() {
    this.isHidden = false;
  }
}
