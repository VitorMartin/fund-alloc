import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { http_config, route, key } from "src/app/common/global_values";
import { Fund_Model } from 'src/app/models/fund';
import { Flow_Model } from "../models/flow";

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    constructor(private http: HttpClient) { }

    get_funds_observable() {
        return this.http.get<Fund_Model[]>(http_config.base_url + route.fund);
    }

    // get_fund_avail_observable(
    //     deal_id: bigint, basedate: string = new Date().toISOString().split('T')[0]
    // ) {
    //     const params = new HttpParams()
    //         .set(key.deal_id, deal_id.toString())
    //         .set(key.basedate, basedate)
        
    //     return this.http.get<Number>(
    //         http_config.base_url + route.fund_princ, { params: params }
    //     )
    // }

    get_fund_flow_observable(kold: string) {
        const params = new HttpParams()
            .set(key.kold, kold);
        
        return this.http.get<Flow_Model[]>(http_config.base_url + route.fund_flow, { params: params });
    }
}
