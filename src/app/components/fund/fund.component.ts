import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from "src/app/api/api.service";
import { FLOW_TYPE, key, basedate, amort_column } from 'src/app/common/global_values';
import { Break_Model } from 'src/app/models/break';
import { Flow_Model } from 'src/app/models/flow';

import { Fund_Model } from 'src/app/models/fund'

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {
  basedate: string;
  title: string;
  flows: Flow_Model[];
  amort_column = amort_column;
  displayed_columns: string[] = [
    amort_column.data, amort_column.type, amort_column.val, amort_column.avail_aft
  ];
  
  @Input() fund: Fund_Model;
  
  constructor(private api: ApiService) {
    this.basedate = basedate
  }

  ngOnInit(): void {
    this.title = `KOLD${this.fund.kold}: ${this.fund.princ} ${this.fund.ccy} - ${this.fund.venc}`;

    this.api.get_fund_flow_observable(this.fund.kold).subscribe((data: any) => {
      // Getting flows array
      this.flows = data[key.flow];
      this.flows = this.flows.map((data: any) => {
        return new Flow_Model(
          data[key.type], data[key.val], data[key.avail_bef], data[key.avail_aft],
          data[key.data], data[key.desemb_princ], data[key.fund_princ]
          )
      })

      // Getting fund availability, breaks array and flag
      this.fund.avail = this.fund.princ;
      let breaks: Break_Model[] = [];
      this.flows.forEach((flow: Flow_Model) => {

        if (flow.type == FLOW_TYPE.desemb) {
          this.fund.avail -= flow.val;
        }

        if (flow.avail_aft < 0) {
          breaks.push(new Break_Model(flow.data, flow.avail_aft));
        }
      });
      this.fund.breaks = breaks;
      this.fund.has_break = breaks.length > 0;
    })
  }

}
