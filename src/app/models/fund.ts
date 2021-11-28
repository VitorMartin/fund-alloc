export class Fund_Model {
    ccy: string;
    dealId: bigint;
    ini: string;
    kold: string;
    princ: number;
    venc: string;
    avail: number;
    breaks: any[];
    has_break: boolean;
    
    constructor(ccy: string, dealId: bigint, ini: string, kold: string, princ: number, venc: string, avail: number, breaks: any[], has_break: boolean) {
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