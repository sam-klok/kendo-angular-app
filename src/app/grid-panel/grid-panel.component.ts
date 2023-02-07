import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { customers } from '../customers';
import {
  CompositeFilterDescriptor,
  FilterDescriptor,
  process,
} from '@progress/kendo-data-query';


@Component({
  selector: 'app-grid-panel',
  templateUrl: './grid-panel.component.html',
  styleUrls: ['./grid-panel.component.css']
})
export class GridPanelComponent implements OnInit {
  public gridData: any[] = customers;
  paramContactName: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramContactName = this.route.snapshot.paramMap.get('CompanyName');
    console.log(`param received: ${this.paramContactName}`);

    if (this.paramContactName)
      this.onFilter(this.paramContactName);

  }

  public filter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: [
      {
        field: 'ContactName',
        operator: 'contains',
        value: 'test',
        ignoreCase: true,
      },
    ],
  };

  public onFilter(inputValue: string): void {
    console.log(inputValue);
    this.gridData = process(this.gridData, {
      filter: {
        logic: 'or',
        filters: [
          {
            field: 'ContactName',
            operator: 'contains',
            value: inputValue,
          },
        ],
      },
    }).data;
    
    this.filter = {
      logic: 'or',
      filters: [
        {
          field: 'ContactName',
          operator: 'contains',
          value: inputValue,
        },
      ],
    };
  }

}
