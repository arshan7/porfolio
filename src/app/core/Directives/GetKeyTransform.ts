import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getFirstKey' })
export class GetFirstKeyPipe implements PipeTransform {
  transform(value: any): string {
    return Object.keys(value)[0];
  }
}
