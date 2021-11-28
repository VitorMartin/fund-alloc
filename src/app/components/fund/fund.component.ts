import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from "src/app/api/api.service";
import { flow_types, key } from 'src/app/common/config';
import { basedate } from 'src/app/common/config';
import { Amort_Desemb } from 'src/app/models/amort_desemb';
import { Break_Model } from 'src/app/models/break';
import { Desemb_Model } from 'src/app/models/desemb';
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
  flows: Flow_Model[]
  displayed_columns: string[] = ['data', 'type', 'val', 'avail_aft'];
  
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
          data['type'], data['val'], data['availBefore'], data['availAfter'],
          data['data'], data['desembPrinc'], data['fundPrinc']
          )
      })

      // Getting fund availability, breaks array and flag
      this.fund.avail = this.fund.princ;
      let breaks: Break_Model[] = [];
      this.flows.forEach((flow: Flow_Model) => {

        if (flow.type == flow_types.desemb) {
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
