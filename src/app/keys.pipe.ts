import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  transform(obj: { [key: string]: string }): any[] {
    return obj == null ? [] : Object.keys(obj);
  }
}
