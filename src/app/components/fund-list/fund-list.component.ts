import { Component, OnInit } from '@angular/core';

import { Fund_Model } from 'src/app/models/fund';
import { CCY } from 'src/app/models/ccy';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css']
})
export class FundListComponent implements OnInit {
  funds: any[];

  constructor() { }

  ngOnInit(): void {
    this.funds = [
      new Fund_Model('350101', '5,000,000.00', CCY.USD, '15/Dec/2025', '450,000.00', false),
      new Fund_Model('350102', '25,000,000.00', CCY.USD, '05/Oct/2024', '50,000.00', false),
      new Fund_Model('350103', '8,600,000.00', CCY.USD, '07/Jul/2031', '1,500,000.00', false),
      new Fund_Model('350201', '800,000.00', CCY.EUR, '20/Apr/2022', '10,000.00', true)
    ];
  }

}
