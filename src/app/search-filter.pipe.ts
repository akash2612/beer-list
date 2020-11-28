import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items:any[],searchVal:string): any {
    if(!items) {
      return [];
    }
    if(!searchVal) {
      return items;
    }
    searchVal = searchVal.toLowerCase();
    
    return items.filter(item=> {
      return item.name.toLowerCase().includes(searchVal);
    })
  }

}
