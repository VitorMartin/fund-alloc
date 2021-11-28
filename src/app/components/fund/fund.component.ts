import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from "src/app/api/api.service";
import { key } from 'src/app/api/http.config';
import { Flow_Model } from 'src/app/models/flow';

import { Fund_Model } from 'src/app/models/fund'

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {
  title: string;
  
  @Input() fund: Fund_Model;
  
  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.title = `KOLD${this.fund.kold}: ${this.fund.princ} ${this.fund.ccy} - ${this.fund.venc}`;

    // Fund principal availability
    this.api.get_fund_avail_observable(this.fund.dealId).subscribe((data: any) => {
      this.fund.avail = data[key.princ];
    })

    // Fund breaks
    this.api.get_fund_flow_observable(this.fund.kold).subscribe((data: any) => {
      const flow: Flow_Model[] = data[key.flow];
      
      this.fund.has_break = false;
      for (const f of flow) {
        if (f.avail_aft < 0) {
          this.fund.has_break = true;
          break;
        }
      }
    })
  }

}
