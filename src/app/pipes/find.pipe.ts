import { Pipe, PipeTransform } from '@angular/core';
import {developer} from '../app.component'

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(value: developer[], ...args: any[]): developer[] {
    if (args[0]==""){
      return value
    }
    return value.filter(a=>a.skills.filter(b=>b.search(new RegExp(args[0],"ig"))!=-1).length>0)
  }
}
