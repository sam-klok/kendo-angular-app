import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  searchText = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickButtonSearch(){
    console.log("Button clicked. " + this.searchText);
    // let's put this text to the grid
  }

}
