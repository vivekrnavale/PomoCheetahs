import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  content: string = "Did you know that SmallChange<sup> TM </sup> has no investment fees on portfolios with balances under $5,000? After that, only 0.25% fee apllies monthly.";

  constructor() { }

  ngOnInit(): void {
  }

}
