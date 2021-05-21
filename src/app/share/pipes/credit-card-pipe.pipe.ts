import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardPipe',
})
export class CreditCardPipePipe implements PipeTransform {
  transform(cardNumber: string): string {
    if (!this.hasCorrectLengt(cardNumber)) {
      return 'Invalid Card Length';
    }
    if (!this.isAllNumbers(cardNumber)) {
      return 'Invalid Characters.';
    }
    return this.formatCartNumber(cardNumber);
  }

  isAllNumbers(cardNumber: string): boolean {
    const stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const validNumber = cardNumber
      .split('')
      .filter((char) => stringNumbers.includes(char)).length;
    if (validNumber === cardNumber.length) {
      return true;
    }
    return false;
  }

  hasCorrectLengt(cardNumber: string): boolean {
    const cartNumberLength = cardNumber.length;
    const isMasterorVisa = 16;
    const isAmericanExpress = 15;

    if (
      cartNumberLength === isAmericanExpress ||
      cartNumberLength === isMasterorVisa
    ) {
      return true;
    }

    return false;
  }

  formatCartNumber(cardNumber: string): string {
    const parts = cardNumber.match(/[\s\S]{1,4}/g);
    return parts.join('-');
  }
}
