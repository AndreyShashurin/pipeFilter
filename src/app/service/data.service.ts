import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ItemModel {
  id: number, 
  name: string, 
  type: string
}

export const AppMenuItems: Array<ItemModel> = [
    {
      id: 1,
      name: 'Сергей',
      type: 'type1'
    },{
      id: 2,
      name: 'Андрей',
      type: 'type2'
    },{
      id: 3,
      name: 'Иван',
      type: 'type3'
    },{
      id: 4,
      name: 'Федор',
      type: 'type4'
    },{
      id: 5,
      name: 'Петр',
      type: 'type5'
    },{
      id: 6,
      name: 'Роман',
      type: 'type6'
    },{
      id: 7,
      name: 'Иван',
      type: 'type7'
    },{
      id: 8,
      name: 'Сергей',
      type: 'type12'
    },{
      id: 9,
      name: 'Роман',
      type: 'type9'
    },{
      id: 10,
      name: 'Иван',
      type: 'type10'
    }
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getItemModel(){
    return AppMenuItems;
  }
}