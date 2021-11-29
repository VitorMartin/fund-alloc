import { Component, OnInit } from '@angular/core';

import { key } from "src/app/common/global_values";

import { ApiService } from "src/app/api/api.service";
import { Fund_Model } from 'src/app/models/fund';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css']
})
export class FundListComponent implements OnInit {
  funds: Fund_Model[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get_funds_observable().subscribe((data: any) => {
      this.funds = data[key.funds];
      this.funds = this.funds.map((data: any) => {
        return new Fund_Model(
          data[key.ccy], data[key.deal_id], data[key.ini], data[key.kold],
          data[key.princ], data[key.venc], data[key.princ], undefined
        )
      });
    })
  }
}
