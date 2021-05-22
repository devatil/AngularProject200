import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
  pure: false,
})
export class FlattenPipe implements PipeTransform {
  transform(values: any[]): any[] {
    return this.flattenArray(values);
  }

  flattenArray(arr: any[]): any[] {
    const resutl = [];
    arr.forEach((value) => {
      if (Array.isArray(value)) {
        resutl.push(...this.flattenArray(value));
      } else {
        return resutl.push(value);
      }
    });
    return resutl;
  }
}
