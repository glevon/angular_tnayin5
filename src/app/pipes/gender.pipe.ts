import { Pipe, PipeTransform } from '@angular/core';
import {developer} from '../app.component'

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: developer[], ...args: any[]): developer[] {
    value.forEach(a=>a.name=a.gender+" "+a.name)
    return value
  }

}
