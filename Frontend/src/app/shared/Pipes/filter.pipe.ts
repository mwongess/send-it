import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: any): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (
        item.name
          .toLocaleLowerCase()
          .indexOf(filterString.toLocaleLowerCase()) !== -1
      ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
