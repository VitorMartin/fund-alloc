import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { http_config, route, key } from "src/app/common/global_values";
import { Fund_Model } from 'src/app/models/fund';
import { Flow_Model } from "../models/flow";
import { Desemb_Model } from "../models/desemb";
import { Amort_Desemb_Model } from "../models/amort_desemb";

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    constructor(private http: HttpClient) { }

    get_funds_observable() {
        return this.http.get<Fund_Model[]>(http_config.base_url + route.fund);
    }

    get_fund_by_kold(kold: string) {
        const params = new HttpParams()
            .set(key.kold, kold)
        
        return this.http.get<Fund_Model>(http_config.base_url + route.fund, { params: params })
    }

    get_avail_funds(ccb: string, basedate: Date = new Date()) {
        const params = new HttpParams()
            .set(key.ccb, ccb)
            .set(key.basedate, basedate.toISOString().split('T')[0])

        return this.http.get<Fund_Model[]>(http_config.base_url + route.avail_funds, { params: params })
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

    get_desembs_observable() {
        return this.http.get<Desemb_Model[]>(http_config.base_url + route.desemb)
    }

    get_desemb_by_ccb_observable(ccb: string) {
        const params = new HttpParams()
            .set(key.ccb, ccb)
        
        return this.http.get<Desemb_Model>(http_config.base_url + route.desemb, { params: params })
    }

    get_desemb_amorts_observable(deal_id: bigint) {
        const params = new HttpParams()
            .set(key.deal_id, deal_id.toString());
        
        return this.http.get<Amort_Desemb_Model[]>(http_config.base_url + route.amort_desemb, { params: params })
    }

    change_fund(ccb: string, kold: string, override: boolean = false) {
        if (kold) {
            return this.http.put(http_config.base_url + route.desemb + `/?ccb=${ccb}&kold=${kold}&override=${override}`, {})
        }
        else {
            return this.http.put(http_config.base_url + route.desemb + `/?ccb=${ccb}`, {})
        }
    }
}
