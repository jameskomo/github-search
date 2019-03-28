import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchConverter'
})
export class SearchConverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
