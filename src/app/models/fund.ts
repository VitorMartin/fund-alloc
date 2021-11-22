import { CCY } from "./ccy";

export class Fund_Model {
    kold: string;
    total_princ: string;
    ccy: string;
    maturity: string;
    avail_princ: string;
    has_break: boolean;
    
    constructor(kold: string, total_princ: string, ccy: CCY, maturity: string, avail_princ: string, has_break: boolean) {
        this.kold = kold;
        this.total_princ = total_princ;
        this.ccy = ccy;
        this.maturity = maturity;
        this.avail_princ = avail_princ;
        this.has_break = has_break
    }
}