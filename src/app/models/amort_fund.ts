import { CCY } from "../common/global_values";
import { Fund_Model } from "./fund";

export class Amort_Fund {
    amort_id: bigint;
    ccy: CCY;
    data: string;
    fund: Fund_Model;
    val: number;

    constructor(amort_id: bigint, ccy: CCY, data: string, fund: Fund_Model, val: number) {
        this.amort_id = amort_id;
        this.ccy = ccy;
        this.data = data;
        this.fund = fund;
        this.val = val;
    }
}