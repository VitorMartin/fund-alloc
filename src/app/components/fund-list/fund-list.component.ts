import { Component, Input, OnInit } from '@angular/core';

import { FLOW_TYPE, key } from "src/app/common/global_values";

import { ApiService } from "src/app/api/api.service";
import { Fund_Model } from 'src/app/models/fund';
import { Flow_Model } from 'src/app/models/flow';
import { Break_Model } from 'src/app/models/break';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css']
})
export class FundListComponent implements OnInit {
  funds: Fund_Model[];

  @Input() title: string = 'Funds'
  @Input() get_breaks: boolean = false;
  @Input() get_avail_funds: boolean = false;
  @Input() ccb: string = ''

  constructor(private api: ApiService) { }

  async ngOnInit() {
    const data: any = await this.api.get_funds_observable().toPromise()
    let funds_temp: Fund_Model[]
    funds_temp = data[key.funds];
    funds_temp = funds_temp.map((data: any) => {
      return new Fund_Model(
        data[key.ccy], data[key.deal_id], data[key.ini], data[key.kold],
        data[key.princ], data[key.venc], data[key.princ], undefined
      )
    });

    if (this.get_breaks) {
      for (let i = 0; i < funds_temp.length; i++){
        let fund = funds_temp[i]
        const data: any = await this.api.get_fund_flow_observable(fund.kold).toPromise()
          // Getting flows array
        let flows = data[key.flow];
        flows = flows.map((data: any) => {
          return new Flow_Model(
            data[key.type], data[key.val], data[key.avail_bef], data[key.avail_aft],
            data[key.data], data[key.desemb_princ], data[key.fund_princ]
            )
        })
  
        // Getting fund availability, breaks array and flag
        fund.avail = fund.princ;
        let breaks: Break_Model[] = [];
        flows.forEach((flow: Flow_Model) => {
  
          if (flow.type == FLOW_TYPE.desemb) {
            fund.avail -= flow.val;
          }
  
          if (flow.avail_aft < 0) {
            breaks.push(new Break_Model(flow.data, flow.avail_aft));
          }
        });
        fund.breaks = breaks;
        fund.has_break = breaks.length > 0;
      }
      this.funds = funds_temp.filter(fund => fund.avail < 0)
    }
    else if (this.get_avail_funds) {
      const data: any = await this.api.get_avail_funds(this.ccb).toPromise()
      let funds_temp: Fund_Model[]
      funds_temp = data[key.funds];
      funds_temp = funds_temp.map((data: any) => {
        return new Fund_Model(
          data[key.ccy], data[key.deal_id], data[key.ini], data[key.kold],
          data[key.princ], data[key.venc], data[key.princ], undefined
        )
      });
      this.funds = funds_temp
      console.log(this.funds);
      
    }
    else {
      this.funds = funds_temp
    }
  }

  ngOnChanges(): void {
    this.ngOnInit()
  }
}
