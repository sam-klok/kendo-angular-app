import { Component, OnInit } from '@angular/core';
import { customers } from '../customers';

@Component({
  selector: 'app-grid-panel',
  templateUrl: './grid-panel.component.html',
  styleUrls: ['./grid-panel.component.css']
})
export class GridPanelComponent implements OnInit {
  public gridData: any[] = customers;

  constructor() { }

  ngOnInit(): void {
  }

}
