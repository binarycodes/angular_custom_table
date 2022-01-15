import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bn-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.scss']
})
export class CustomSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('inside search...');
  }

}
