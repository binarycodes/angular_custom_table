import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.sass']
})
export class CustomSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('inside search...');
  }

}
