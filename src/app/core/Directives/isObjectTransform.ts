import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'isObject' })
export class IsObjectPipe implements PipeTransform {
  transform(value: any): boolean {
    return value instanceof Object && !Array.isArray(value);
  }
}

@Pipe({ name: 'isArray' })
export class IsArrayPipe implements PipeTransform {
  transform(value: any): boolean {
    return Array.isArray(value);
  }
}
