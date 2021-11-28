import { CCY } from "../common/global_values";

export class Fund_Model {
    ccy: CCY;
    dealId: bigint;
    ini: string;
    kold: string;
    princ: number;
    venc: string;
    avail: number;
    breaks: any[];
    has_break: boolean;
    
    constructor(ccy: CCY, dealId: bigint, ini: string, kold: string, princ: number, venc: string, avail: number, breaks: any[]) {
        this.ccy = ccy;
        this.dealId = dealId;
        this.ini = ini;
        this.kold = kold;
        this.princ = princ;
        this.venc = venc;
        this.avail = avail;
        this.breaks = breaks;
        this.has_break = this.breaks.length > 0;
    }
}