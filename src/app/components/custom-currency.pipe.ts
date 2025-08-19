import { formatCurrency, getLocaleCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
})
export class CustomCurrencyPipe implements PipeTransform {
  currencyCode = 'BOB';
  locale = 'es-BO';
  transform(value: number, digistInfo: string): string | null {
    const localeCurrencySymbol = getLocaleCurrencySymbol(this.locale) || '';
    // const localeCurrencySymbol = getLocaleCurrencySymbol(this.locale)!; // Usando un assertion operation
    return formatCurrency(
      value,
      this.locale,
      localeCurrencySymbol,
      this.currencyCode,
      digistInfo,
    );
  }
}
