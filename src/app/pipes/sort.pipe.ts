import { Pipe, PipeTransform } from '@angular/core';
import {developer} from '../app.component'
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: developer[], ...args: any[]): developer[] {
    if(args[1]=="decreased"){
      return value.sort((a,b)=>a[args[0]]>b[args[0]]? 1:-1);
    }
    else{
      return value.sort((a,b)=>a[args[0]]<b[args[0]]? 1:-1);
    }    
  }

}
