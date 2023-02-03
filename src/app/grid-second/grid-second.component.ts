import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-grid-second',  //we don't need selector, we will use routing
  templateUrl: './grid-second.component.html',
  styleUrls: ['./grid-second.component.css']
})
export class GridSecondComponent implements OnInit {
  pageTitle: string = 'Second Grid';

  constructor() { }

  ngOnInit(): void {
  }

}
