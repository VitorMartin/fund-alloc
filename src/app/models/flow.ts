import { FLOW_TYPE } from "../common/global_values";
import { Amort_Desemb } from "./amort_desemb";
import { Amort_Fund } from "./amort_fund";
import { Desemb_Model } from "./desemb";
import { Fund_Model } from "./fund";

export class Flow_Model {
    avai_bef: number;
    avail_aft: number;
    data: string;
    desemb_princ: number;
    fund_princ: number;
    op: Fund_Model | Desemb_Model | Amort_Fund | Amort_Desemb
    type: FLOW_TYPE;
    val: number

    constructor(type: FLOW_TYPE, val: number, avail_bef: number, avail_aft: number, data: string, desemb_princ: number, fund_princ: number) {
        this.type = type;
        this.val = val;
        this.avai_bef = avail_bef;
        this.avail_aft = avail_aft;
        this.data = data;
        this.desemb_princ = desemb_princ;
        this.fund_princ = fund_princ;
    }
}