import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from "src/app/api/api.service";
import { Number_Formatter } from 'src/app/common/formatter';
import { FLOW_TYPE, key, basedate, AMORT_COLUMN } from 'src/app/common/global_values';
import { Amort_Desemb_Model } from 'src/app/models/amort_desemb';
import { Desemb_Model } from 'src/app/models/desemb';
import { Flow_Model } from 'src/app/models/flow';
import { Fund_Model } from 'src/app/models/fund';


@Component({
  selector: 'app-desemb',
  templateUrl: './desemb.component.html',
  styleUrls: ['./desemb.component.css']
})
export class DesembComponent implements OnInit {

  basedate: string;
  title: string;
  flows: Flow_Model[];
  amort_column = AMORT_COLUMN;
  displayed_columns: string[] = [
    AMORT_COLUMN.data, AMORT_COLUMN.type, AMORT_COLUMN.val, AMORT_COLUMN.avail_aft
  ];

  @Input() desemb: Desemb_Model;

  constructor(private api: ApiService) {
    this.basedate = basedate;
  }

  ngOnInit(): void {
    const formatter = new Number_Formatter();
    this.title = `CCB ${this.desemb.ccb}: ${formatter.format_ccy(this.desemb.princ, this.desemb.ccy)} ${this.desemb.ccy} - ${this.desemb.venc}`;
    this.api.get_desemb_amorts_observable(this.desemb.deal_id).subscribe((data: any) => {
      let amorts: Amort_Desemb_Model[] = data[key.amortDesembs];
      amorts = amorts.map((amorts_data: any) => {
        return new Amort_Desemb_Model(
          amorts_data[key.amort_id], amorts_data[key.ccy], amorts_data[key.data], amorts_data[key.desemb], amorts_data[key.val]
        )
      })
      
      this.flows = [
        new Flow_Model(
          FLOW_TYPE.desemb, this.desemb.princ, 0, this.desemb.princ, this.desemb.ini, this.desemb.princ, this.desemb.fund?.princ
        )
      ];
      
      let avail_bef: number = this.desemb.princ;
      amorts.forEach((am: Amort_Desemb_Model) => {
        let avail_aft: number = avail_bef - am.val;
        this.flows = [
          ...this.flows,
          new Flow_Model(FLOW_TYPE.amort_desemb, am.val, avail_bef, avail_aft, am.data, this.desemb.princ, this.desemb.fund?.princ)
        ]
        avail_bef = avail_aft;
      });
    })
    // this.api.get_desemb_amorts_observable(this.desemb.deal_id).subscribe((data: any) => {
    //   const data_flow: any[] = data[key.amortDesembs]
    //   this.flows = [
    //     ...this.flows,
    //     new Flow_Model(
    //       FLOW_TYPE.desemb, this.desemb.princ, 0, this.desemb.princ, this.desemb.ini, this.desemb.princ, this.desemb.fund?.princ
    //     )
    //   ]
      
    //   let princ_bef = this.desemb.princ
    //   data_flow.forEach((flow: any) => {
    //     let val = flow[key.val]
    //     let princ_aft = princ_bef - val
    //     let fund_princ = this.desemb.fund ? this.desemb.fund.princ : undefined;
    //     this.flows = [
    //       ...this.flows,
    //       new Flow_Model(
    //         FLOW_TYPE.amort_desemb, flow[key.val], princ_bef, princ_aft, flow[key.data], this.desemb.princ, fund_princ
    //       )
    //     ]
    //     princ_bef = princ_aft;
    //   });
    // })
  }
}
