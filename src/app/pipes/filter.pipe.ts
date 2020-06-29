import { Pipe, PipeTransform } from '@angular/core';
import {developer} from '../app.component'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: developer[], ...args: any[]): developer[] {
    if (args[0]==""){
      return value
    }
    return value.filter(a=>a.direction==args[0]);
  }
}
