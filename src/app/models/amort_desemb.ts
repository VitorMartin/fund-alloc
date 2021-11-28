import { Desemb_Model } from "./desemb";

export class Amort_Desemb {
    amort_id: bigint;
    ccy: string;
    data: string;
    desemb: Desemb_Model;
    val: number;

    constructor(amort_id: bigint, ccy: string, data: string, desemb: Desemb_Model, val: number) {
        this.amort_id = amort_id;
        this.ccy = ccy;
        this.data = data;
        this.desemb = desemb;
        this.val = val;
    }
}