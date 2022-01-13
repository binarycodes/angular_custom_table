import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.sass']
})
export class SearchComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('inside search...');
  }

}
