import { Pipe, PipeTransform } from '@angular/core';
import {developer} from '../app.component'

@Pipe({
  name: 'mail'
})
export class MailPipe implements PipeTransform {

  transform(value: developer[], ...args: any[]): developer[] {
    value.forEach(a=>a.email=a.email.replace(a.email.substring(4,a.email.length),"*".repeat(a.email.length-4)))
    return value
  }

}
