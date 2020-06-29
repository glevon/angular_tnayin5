import { Pipe, PipeTransform } from '@angular/core';
import {developer} from '../app.component'

@Pipe({
  name: 'senior'
})
export class SeniorPipe implements PipeTransform {

  transform(value: developer[], ...args: any[]): developer[] {
    value.forEach(a=>a.name=a.skills.length>=3?"Senior "+a.name:a.name)
    return value
  }

}
