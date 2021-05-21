import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss'],
})
export class CreditCardInputComponent {
  @Input()
  creditCardNumber = '';

  readonly = false;

  get isReadOnly() {
    return this.readonly;
  }

  @Input()
  set isReadOnly(value: boolean) {
    this.creditCardNumber = value
      ? this.formatReadOnlyCcNum(this.creditCardNumber)
      : this.secondFormat(this.creditCardNumber);
    this.readonly = value;
  }

  formatReadOnlyCcNum(ccNum: string): string {
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];

    const onlyLast4Show = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return part;
      }
      return 'xxxx';
    });

    return onlyLast4Show.join('-');
  }

  secondFormat(ccNum: string) {
    const parts = ccNum.match(/[\s\S]{1,4}/g);
    const fullNumber = parts.join('-');
    return fullNumber;
  }
}
