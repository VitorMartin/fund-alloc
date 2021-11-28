import { Fund_Model } from "./fund";

export class Desemb_Model {
    ccb: string;
    ccy: string;
    deal_id: bigint;
    fund: Fund_Model;
    ini: string;
    princ: number;
    venc: string;

    constructor(ccb: string, ccy: string, deal_id: bigint, fund: Fund_Model, ini: string, princ: number, venc: string) {
        this.ccb = ccb;
        this.ccy = ccy;
        this.deal_id = deal_id;
        this.fund = fund;
        this.ini = ini;
        this.princ = princ;
        this.venc = venc;
    }
}