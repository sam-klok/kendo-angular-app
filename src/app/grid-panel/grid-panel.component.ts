import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { customers } from '../customers';

@Component({
  selector: 'app-grid-panel',
  templateUrl: './grid-panel.component.html',
  styleUrls: ['./grid-panel.component.css']
})
export class GridPanelComponent implements OnInit {
  public gridData: any[] = customers;
  paramCompanyName: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramCompanyName = this.route.snapshot.paramMap.get('CompanyName');
  }

}
