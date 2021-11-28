import { Desemb_Model } from "./desemb";

export class Amort_Desemb {
    amort_id: bigint;
    ccy: string;
    date: string;
    desemb: Desemb_Model;
    val: number;

    constructor(amort_id: bigint, ccy: string, date: string, desemb: Desemb_Model, val: number) {
        this.amort_id = amort_id;
        this.ccy = ccy;
        this.date = date;
        this.desemb = desemb;
        this.val = val;
    }
}