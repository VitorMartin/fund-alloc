import { Fund_Model } from "./fund";

export class Amort_Fund {
    amort_id: bigint;
    ccy: string;
    date: string;
    fund: Fund_Model;
    val: number;

    constructor(amort_id: bigint, ccy: string, date: string, fund: Fund_Model, val: number) {
        this.amort_id = amort_id;
        this.ccy = ccy;
        this.date = date;
        this.fund = fund;
        this.val = val;
    }
}