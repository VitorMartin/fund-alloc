import { Component, OnInit } from '@angular/core';

import { key } from "src/app/api/http.config";

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
    })
  }
}
