import { Component, OnInit } from '@angular/core';
import { Trade } from 'src/app/models/trade';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  trades : Trade[] = [{instrumentId: 'ABC', quantity: 10, executionPrice: 100, direction: 'B', clientId:'123', order: 'Placed', tradeId: 'b1', cashValue: 1000}
  ,{instrumentId: 'XYZ', quantity: 100, executionPrice: 100, direction: 'S', clientId:'456', order: 'Pending', tradeId: 's1', cashValue: 10000}]
  
  constructor() { }

  ngOnInit(): void {
  }

}
