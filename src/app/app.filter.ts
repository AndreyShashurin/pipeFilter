import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchName: string): any[] {
    if(!searchName) return items;
    searchName = searchName.toLowerCase();
        return items.filter( item => {
          return item.name.toLowerCase().includes(searchName);
        });
   } 
}