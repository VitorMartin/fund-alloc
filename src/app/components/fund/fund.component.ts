import { Component, OnInit, Input } from '@angular/core';

import { Fund_Model } from '../../models/fund'

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {
  title: string;
  
  @Input() fund: Fund_Model;
  
  constructor() {
  }

  ngOnInit(): void {
    this.title = `KOLD${this.fund.kold}: ${this.fund.total_princ} ${this.fund.ccy} - ${this.fund.maturity}`;
  }

}
