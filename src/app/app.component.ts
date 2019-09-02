import { Component } from '@angular/core';
import { DataService, AppMenuItems, ItemModel } from './service/data.service';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';  
import { FilterPipe } from './app.filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: ItemModel[] =[];
  searchType: string = '';

  constructor(
    private dataService: DataService, 
    private router: Router
  ){
    this.items = AppMenuItems;  
  }
  
  ngOnInit() {
    
  }
}
