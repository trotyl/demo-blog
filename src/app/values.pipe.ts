import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'values'
})
export class ValuesPipe implements PipeTransform {
  transform(obj: { [key: string]: string }): any[] {
    return obj == null ? [] : Object.values(obj);
  }
}
