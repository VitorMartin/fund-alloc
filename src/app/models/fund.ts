import { CCY } from "../common/global_values";

export class Fund_Model {
    ccy: CCY;
    deal_id: bigint;
    ini: string;
    kold: string;
    princ: number;
    venc: string;
    avail: number;
    breaks: any[] | undefined;
    has_break: boolean;
    
    constructor(ccy: CCY, dealId: bigint, ini: string, kold: string, princ: number, venc: string, avail: number, breaks: any[] | undefined) {
        this.ccy = ccy;
        this.deal_id = dealId;
        this.ini = ini;
        this.kold = kold;
        this.princ = princ;
        this.venc = venc;
        this.avail = avail;
        this.breaks = breaks;
        if (this.breaks && this.breaks.length > 0) {
            this.has_break = true;
        }
        else {
            this.has_break = false;
        }
    }
}