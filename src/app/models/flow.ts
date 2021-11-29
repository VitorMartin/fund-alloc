import { FLOW_TYPE } from "../common/global_values";
import { Amort_Desemb_Model } from "./amort_desemb";
import { Amort_Fund_Model } from "./amort_fund";
import { Desemb_Model } from "./desemb";
import { Fund_Model } from "./fund";

export class Flow_Model {
    avai_bef: number;
    avail_aft: number;
    data: string;
    desemb_princ: number | undefined;
    fund_princ: number | undefined;
    op: Fund_Model | Desemb_Model | Amort_Fund_Model | Amort_Desemb_Model
    type: FLOW_TYPE;
    val: number

    constructor(type: FLOW_TYPE, val: number, avail_bef: number, avail_aft: number, data: string, desemb_princ: number | undefined, fund_princ: number | undefined) {
        this.type = type;
        this.val = val;
        this.avai_bef = avail_bef;
        this.avail_aft = avail_aft;
        this.data = data;
        this.desemb_princ = desemb_princ;
        this.fund_princ = fund_princ;
    }
}