import { Component, OnInit } from '@angular/core';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { customers } from '../customers';
import { customerObjs } from '../customersConvert';

@Component({
  //selector: 'app-grid-second',  //we don't need selector, we will use routing
  templateUrl: './grid-second.component.html',
  styleUrls: ['./grid-second.component.css']
})
export class GridSecondComponent implements OnInit {
  pageTitle: string = 'Second Grid';
  public gridData: any[] = customerObjs;
  filter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: []
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClearFiltersClick(){
    console.log(this.filter);
  }

}
